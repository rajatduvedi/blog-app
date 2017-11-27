/*
The following will be used for populating dropdowns/select inputs
*/

export const MockKeyValues = {
    // email subscriptions
    emailSubscriptions: [
        { key: 'NEW_COURSES', displayedValue: 'New and upcoming courses and announcements' },
        { key: 'PROMOTIONS', displayedValue: 'Promotions' },
        { key: 'PARTNER_OFFERS', displayedValue: 'Partner offers' }
    ],

    // Course
    courseCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'just_released', displayedValue: 'Just Released' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' }

    ],
    courseSubCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    courseSubjects: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    courseCollectionTypes: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'full_stack', displayedValue: 'Full Stack Development' },
        { key: 'test_prep', displayedValue: 'Test Preparation' },
        { key: 'certification', displayedValue: 'Certification' },
    ],
    // video, test, assignment or downloadable
    lessonItemTypes: [
        { key: 'video', displayedValue: 'Video' },
        { key: 'pdf', displayedValue: 'pdf file' },
        { key: 'html', displayedValue: 'HTML formatted text' },
        { key: 'slide', displayedValue: 'Slide Presentation' },
        { key: 'image', displayedValue: 'image' },
        { key: 'assessment', displayedValue: 'Test' },
        { key: 'quiz', displayedValue: 'Quiz' },
        { key: 'assignment', displayedValue: 'Assignment' },
        { key: 'challenge', displayedValue: 'Challenge' },
        { key: 'downloadable', displayedValue: 'Downloadable file' }
    ],
    courseStatuses: [
        { key: 'draft', displayedValue: 'Draft' },
        { key: 'submitted_for_review', displayedValue: 'Submitted for Review' },
        { key: 'pending_review', displayedValue: 'Pending Review' },
        { key: 'query_sent', displayedValue: 'Query sent to Owner' },
        { key: 'incomplete', displayedValue: 'Incomplete' },
        { key: 'approved', displayedValue: 'Approved' },
        { key: 'owner_rejected', displayedValue: 'Rejected by Owner' },
        { key: 'rejected', displayedValue: 'Rejected' },
        { key: 'active', displayedValue: 'Active' },
        { key: 'withdrawn', displayedValue: 'Withdrawn' }
    ],

    // assessment
    assessmentCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    assessmentSubCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    assessmentSubjects: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    assessmentTypes: [
        { key: 'assessment', displayedValue: 'Test' },
        { key: 'quiz', displayedValue: 'Quiz' },
        { key: 'assignment', displayedValue: 'Assignment' },
        { key: 'exercise', displayedValue: 'exercise' },
        { key: 'project', displayedValue: 'Project' },
        { key: 'challenge', displayedValue: 'Challenge' },
    ],
    assessmentStatuses: [
        { key: 'draft', displayedValue: 'Draft' },
        { key: 'submitted_for_review', displayedValue: 'Submitted for Review' },
        { key: 'pending_review', displayedValue: 'Pending Review' },
        { key: 'query_sent', displayedValue: 'Query sent to Owner' },
        { key: 'incomplete', displayedValue: 'Incomplete' },
        { key: 'approved', displayedValue: 'Approved' },
        { key: 'owner_rejected', displayedValue: 'Rejected by Owner' },
        { key: 'rejected', displayedValue: 'Rejected' },
        { key: 'active', displayedValue: 'Active' },
        { key: 'withdrawn', displayedValue: 'Withdrawn' }
    ],

    assessmentSuiteTypes: [
        { key: 'full_stack', displayedValue: 'Full Stack Development' },
        { key: 'test_prep', displayedValue: 'Test Preparation' },
        { key: 'certification', displayedValue: 'Certification' }
    ],
    assessmentSuiteStatuses: [
        { key: 'draft', displayedValue: 'Draft' },
        { key: 'submitted_for_review', displayedValue: 'Submitted for Review' },
        { key: 'pending_review', displayedValue: 'Pending Review' },
        { key: 'query_sent', displayedValue: 'Query sent to Owner' },
        { key: 'incomplete', displayedValue: 'Incomplete' },
        { key: 'approved', displayedValue: 'Approved' },
        { key: 'owner_rejected', displayedValue: 'Rejected by Owner' },
        { key: 'rejected', displayedValue: 'Rejected' },
        { key: 'active', displayedValue: 'Active' },
        { key: 'withdrawn', displayedValue: 'Withdrawn' }
    ],

    assessmentSectionCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    assessmentSectionSubCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' }
    ],
    assessmentSectionSubjects: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    asessmentSectionDifficultyLevels: [
        { key: 1, displayedValue: '1-Extremely easy' },
        { key: 2, displayedValue: '2-Very easy' },
        { key: 3, displayedValue: '3-easy' },
        { key: 4, displayedValue: '4-medium-easy' },
        { key: 5, displayedValue: '5-medium' },
        { key: 6, displayedValue: '6-medium-hard' },
        { key: 7, displayedValue: '7-hard' },
        { key: 8, displayedValue: '8-very hard' },
        { key: 9, displayedValue: '9-Extremly hard' },
        { key: 10, displayedValue: '10-Super duper hard' }
    ],

    assessmentLayoutTypes: [
        { key: 'TOP_DOWN', displayedValue: 'Top Down' },
        { key: 'SIDE_BYSIDE', displayedValue: 'Side by Side' },
    ],

    questionCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    questionSubCategories: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    questionSubjects: [
        { key: 'tech', displayedValue: 'Technology' },
        { key: 'web_development', displayedValue: 'Web Development' },
        { key: 'javascript_frameworks', displayedValue: 'Javascript Frameworks' },
        { key: 'programming', displayedValue: 'Programming' },
        { key: 'sat', displayedValue: 'SAT' },
        { key: 'stem', displayedValue: 'STEM' },

    ],
    questionDifficultyLevels: [
        { key: 1, displayedValue: '1-Extremely easy' },
        { key: 2, displayedValue: '2-Very easy' },
        { key: 3, displayedValue: '3-easy' },
        { key: 4, displayedValue: '4-medium-easy' },
        { key: 5, displayedValue: '5-medium' },
        { key: 6, displayedValue: '6-medium-hard' },
        { key: 7, displayedValue: '7-hard' },
        { key: 8, displayedValue: '8-very hard' },
        { key: 9, displayedValue: '9-Extremly hard' },
        { key: 10, displayedValue: '10-Super duper hard' }
    ],

    answerTypes: [
        { key: 'SINGLE_SELECT', displayedValue: 'Single Select' },
        { key: 'MULTIPLE_SELECT', displayedValue: 'Multiple Select' },
        { key: 'INPUT_TEXT', displayedValue: 'Text' },
        { key: 'INPUT_NUMBER', displayedValue: 'Number' },
    ],


    // user
    userRoles: [
        { key: 'user', displayedValue: 'User' },
        { key: 'student', displayedValue: 'Student' },
        { key: 'parent', displayedValue: 'Parent' },
        { key: 'author', displayedValue: 'Author' },
        { key: 'teacher', displayedValue: 'Teacher' },
        { key: 'instructor', displayedValue: 'Instructor' },
        { key: 'lead-instructor', displayedValue: 'LeadInstructor' },
        { key: 'owner', displayedValue: 'Owner' },
        { key: 'atsAdmin', displayedValue: 'Ats Admin' }
    ],
    userAccountRoles: [
        { key: 'none', displayedValue: 'none' },
        { key: 'manager', displayedValue: 'Account Manager' },
        { key: 'senior_manager', displayedValue: 'Senior Account Manager' }
    ],
    userAdminRoles: [
        { key: 'none', displayedValue: 'None' },
        { key: 'admin', displayedValue: 'Admin' },
        { key: 'super_admin', displayedValue: 'SuperAdmin' }
    ],
    userTypes: [
        { key: 'user', displayedValue: 'User' },
        { key: 'student', displayedValue: 'Student' },
        { key: 'parent', displayedValue: 'Parent' },
        { key: 'author', displayedValue: 'Author' },
        { key: 'teacher', displayedValue: 'Teacher' },
        { key: 'instructor', displayedValue: 'Instructor' },
        { key: 'owner', displayedValue: 'Owner' }
    ],
    userStatuses: [
        { key: 'active', displayedValue: 'Active' },
        { key: 'suspended', displayedValue: 'Suspended' },
        { key: 'created', displayedValue: 'Created' },
        { key: 'deleted', displayedValue: 'Deleted' },
        { key: 'pendingConfirmation', displayedValue: 'Pending Confirmation' },
        { key: 'pendingParentConfirmation', displayedValue: 'PendingParentConfirmation' },
    ],

    ownerTypes: [
        { key: 'individual', displayedValue: 'Individual' },
        { key: 'organization', displayedValue: 'Organization' },
    ],

    faqCategories: [
        { key: 'category1', displayedValue: 'Category 1' },
        { key: 'category2', displayedValue: 'Category 2' },
        { key: 'category3', displayedValue: 'Category 3' },
        { key: 'category4', displayedValue: 'Category 4' },
    ],

    promotionTypes: [
        { key: 'discountAmount', displayedValue: 'Discount (Amount)' },
        { key: 'discountPerct', displayedValue: 'Discount (Percentage)' },
        { key: 'rewardPoints', displayedValue: 'Reward Points' },
        { key: 'freeItem', displayedValue: 'Free Item(s)' },
        { key: 'unlockItem', displayedValue: 'Unlock Item(s)' },
        { key: 'scholarship', displayedValue: 'Scholarship' },
    ],
/*
    discountTypes: [
        { key: 'value', displayedValue: 'Value' },
        { key: 'percentage', displayedValue: 'Percentage of Value' },
        { key: 'converted', displayedValue: 'Converted from Points' },
        { key: 'freeItem', displayedValue: 'Free Item(s)' },
        { key: 'unlock', displayedValue: 'Unlock Item(s)' },
    ],
*/
    discountRestrictionLogics: [
        { key: 'notIn', displayedValue: 'Applies if items are not in  the list' },
        { key: 'allIn', displayedValue: 'Applies if all items are in the list' },
        { key: 'anyIn', displayedValue: 'Applies if any of the items are in the list' },
        { key: 'na', displayedValue: 'Not Applicable' },
    ],

    promotionDeactivationReasons: [
        { key: 'expired', displayedValue: 'Expired' },
        { key: 'usedUp', displayedValue: 'Is Used Up' },
        { key: 'incorrect', displayedValue: 'Incorrect Promotion' },
        { key: 'duplicate', displayedValue: 'Duplicate' },
        { key: 'other', displayedValue: 'Other' },
        { key: 'na', displayedValue: 'Not Applicable' },
    ],

    promotionAppliesTo: [
        { key: 'product', displayedValue: 'Product' },
        { key: 'order', displayedValue: 'Order' },
        { key: 'user', displayedValue: 'User' },
    ],

    promotionStatuses: [
        { key: 'draft', displayedValue: 'Draft' },
        { key: 'created', displayedValue: 'Created' },
        { key: 'approved', displayedValue: 'Approved' },
        { key: 'communication_sent', displayedValue: 'Communication Sent' },
        { key: 'pending_activation', displayedValue: 'Pending Activation' },
        { key: 'active', displayedValue: 'Active' },
        { key: 'usedup', displayedValue: 'All Used Up' },
    ],

    // default is pending
    orderStatuses: [
        { key: 'canceled', displayedValue: 'Canceled' },
        { key: 'canceledReversal', displayedValue: 'Canceled Reversal' },
        { key: 'chargeback', displayedValue: 'Chargeback' },
        { key: 'complete', displayedValue: 'Complete' },
        { key: 'denied', displayedValue: 'Denied' },
        { key: 'expired', displayedValue: 'Expired' },
        { key: 'failed', displayedValue: 'Failed' },
        { key: 'pending', displayedValue: 'Pending' },
        { key: 'created', displayedValue: 'Created' },
        { key: 'processed', displayedValue: 'Processed' },
        { key: 'processing', displayedValue: 'Processing' },
        { key: 'refunded', displayedValue: 'Refunded' },
        { key: 'reversed', displayedValue: 'Reversed' },
        { key: 'shipped', displayedValue: 'Shipped' },
        { key: 'voided', displayedValue: 'Voided' },
    ],

    paymentRefundReason: [
        { key: 'canceled', displayedValue: 'Canceled' },
        { key: 'orderError', displayedValue: 'Order Error' },
    ],

    itemREturnReason: [
        { key: 'canceled', displayedValue: 'Canceled' },
        { key: 'orderError', displayedValue: 'Order Error' },
    ],

    blogDeactivationReasons: [
        { key: 'inactive', displayedValue: 'Inactive' },
        { key: 'guidlinesViolation', displayedValue: 'Guidelines Violation' },
        { key: 'expired', displayedValue: 'expired' },
    ]

};
