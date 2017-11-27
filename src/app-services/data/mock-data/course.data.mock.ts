// import { ICourse } from './../../../models/ats.course.model';

export const MockCourses = [

    {
        ownerId: '1',
        productId: '1',
        courseCategories: ['Just Released', 'Development', 'Angular', 'Programming'],
        tags: ['Just Released', 'Development', 'Angular', 'Programming'],
        productTitle: 'Angular 101',
        productDescription: 'An introduction to Angular', // HTML formatted string
        productLogoUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 3.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 50.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 100.0,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 50.0,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 55.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '2',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '3',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '4',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '5',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '6',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '7',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '3',
        courseId: '8',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '2',
        courseId: '9',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    },
    {
        ownerId: '3',
        courseId: '10',
        courseCategories: ['Just Released', 'SAT', 'MATH', 'ENGLISH'],
        tags: ['New', 'SAT', 'MATH', 'ENGLISH'],
        title: 'SAT Practice 1',
        description: 'SAT practice test', // HTML formatted string
        avatarUrl: 'assets/avatars/avatar1.png',
        imageUrl: 'assets/images/image1.png',
        isSelfPaced: false, // default = “true”,
        isInstructorLead: false, // default  = “false”,
        canSkipContent: false, // default  = “true”,
        language: 'En',
        reviews: [''],
        reviewsRating: 4.5 ,
        videoHours: 12.5,
        numberOfVideos: 23,
        skillLevel: 'Beginner',
        accessType: 'limited', // lifetime
        expirationDate: '2017/12/31', // datetime
        courseProgress: 25.0, // percentage complete
        deliveryMethod: 'online', // online or in person default online
        status: 'ACTIVE', // is active, underreview , submitted, approved, locked
        courseSections: [
            {
                courseSectionTitle: 'Unit 1', // none, single, courseSeries, learningPath,certifications
                courseSectionDescription: 'Introduction',
                lessons: [
                    {
                        lessonTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Installing CLI', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'Installing Angular CLI', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '4:45',
                                contentUrl: '/assets/videos/ngcli1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'Installing Angular', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '3:05',
                                contentUrl: '/assets/videos/ngcli2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'My first Angular project', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/ngcli3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 62.5,

                    },
                    {
                        lessonTitle: 'Getting started with Angular', // none, single, courseSeries, learningPath,certifications
                        lessonSections: [
                        {
                            lessonSectionTitle: 'Package.json', // none, single, courseSeries, learningPath,certifications
                            lessonItems: [
                            {
                                lessonItemId: 'LI121',
                                lessonItemTitle: 'project structure', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:55',
                                contentUrl: '/assets/videos/gsng1.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI122',
                                lessonItemTitle: 'package.json', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '2:45',
                                contentUrl: '/assets/videos/gsng2.mp4',
                                isFreePreview: false,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            },
                            {
                                lessonItemId: 'LI123',
                                lessonItemTitle: 'VScode', // none, single, courseSeries, learningPath,certifications
                                lessonItemType: 'video', // -- video, test, assignment or downloadable
                                lessonItemProgress: 65.6,
                                lessonItemDuration: '1:45',
                                contentUrl: '/assets/videos/gsng3.mp4',
                                isFreePreview: true,
                                freePreviewStartDate: '',
                                freePreviewEndDate: ''
                            }
                            ],
                            lessonSectionProgress: 35.6
                        }
                        ],
                        lessonProgress: 72.5,

                    }
                ],
                courseSectionProgress: 12.5 // percentage complete
            }

        ], // units or chapters
        authors: [
            '1'
        ],
        instructors: [
            '1'
        ],
        leadInstructor: '1'
    }
];
