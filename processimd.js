const processImediate = async (course, user, accntId) => {
    try {
        let cardsAssessmentsBreakTemplates = []
        let startOfCourseBody = { detail: { content: [{ userId: user.userId, accntId: accntId, courseId: course.courseId }] } }
        // let welMsg = await createUserNominationObject(startOfCourseBody, true)
        // cardsAssessmentsBreakTemplates.push(welMsg)


        for (let chapter of course.chapters) {
            for (let card of chapter.cards) {

                let dt = {
                    detail: {
                        content: {
                            cardInfo: {
                                cardType: card.cardType,
                                card: [{
                                    text: card.cardInfo.card[0].text
                                }]
                            },
                            userId: user.userId,
                            courseId: course.courseId,
                            chapterSeqNo: 1,
                            courseName: course.courseName
                        }
                    }
                }
                // console.log(dt.detail.content.cardInfo.card[card].text)
                let dataObj = _.cloneDeep(dt);

                let cardTemplate = await createTemplateObject(dataObj, true)
                cardsAssessmentsBreakTemplates.push(cardTemplate);
            }

            // let begAsmntObj = {
            //     detail: {
            //         content: [{
            //             userId: user.userId,
            //             courseId: course.courseId
            //         }]
            //     }
            // }

            // let begAssTemplate = await createAsmntBeginObject(begAsmntObj, true);
            // cardsAssessmentsBreakTemplates.push(begAssTemplate);
            let quesNo = 0;
            for (let question of chapter.questions) {

                let assObj = {
                    detail: {
                        content: [{
                            userId: user.userId,
                            courseId: course.courseId,
                            questionOrder: `Question ${++quesNo} of ${chapter.questions.length} :`,
                            question: {
                                questionId: question.quesId,
                                chapterId: chapter.chapterId,

                            }
                        }]
                    }
                }

                let assTemplate = await createAsmntInteractiveObject(assObj, true);
                cardsAssessmentsBreakTemplates.push(assTemplate);

            }

            // let chptCompObj = {
            //     detail: {
            //         content: [{
            //             userId: user.userId,
            //             courseId: course.courseId,
            //             chapterId: chapter.chapterId,

            //         }]
            //     }
            // }

            // let endOfChapterTemp = await createChapterCompleteObject(chptCompObj);
            // cardsAssessmentsBreakTemplates.push(endOfChapterTemp);
        }

        // let crsCmpObj = {
        //     detail: {
        //         content: [{
        //             userId: user.userId,
        //             accntId: accntId,
        //             courseId: course.courseId
        //         }]
        //     }
        // }

        // let endOfCrsTemp = await createCourseCompleteObject(crsCmpObj);
        // cardsAssessmentsBreakTemplates.push(endOfCrsTemp);

        console.log("This is the final array ==> ", JSON.stringify(cardsAssessmentsBreakTemplates));
        // return cardsAssessmentsBreakTemplates;
         
        const SendMsg = await sendImediateMessages(cardsAssessmentsBreakTemplates);
        console.log(SendMsg);
        return SendMsg

        // creating queue and putting the data into the queue
    //   { const queueUrl = await createFifoQueue(user.userId + `${new Date().getTime()}`)
    //     const queueArn = await getQueueArn(queueUrl);

    //     // Deploy Beanstalk Worker linked to the SQS Queue
    //     const beanstalkAppName = 'YourBeanstalkWorkerAppName';
    //     const beanstalkEnvName = await deployBeanstalkWorker(beanstalkAppName, queueArn);

    //     // Send messages in batches to the queue
    //     await sendMessageBatches(queueUrl, cardsAssessmentsBreakTemplates);}

        // Wait until all messages are processed, then terminate the worker
        // await waitForQueueProcessingToFinish(queueUrl);
        // await terminateBeanstalkWorker(beanstalkAppName, beanstalkEnvName);

        /* this is for the sqs 
         const eventSourceMappingUuid = await createEventSourceMapping(queueArn, gConfig.sendImedSchdItemsConfig.arn);
         await sendMessageBatches(queueUrl, cardsAssessmentsBreakTemplates);
         await waitForQueueToBeEmpty(queueUrl);
         await deleteEventSourceMapping(eventSourceMappingUuid);
         await deleteQueue(queueUrl); */

    }
    catch (e) {
        console.log(logE, e.message);
        throw new Error(e);
    }
}
