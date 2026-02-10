
export const engineeringLog = [
  {
    period: "Month 1",
    title: "Getting In & Understanding the System",
    content: [
      "In my first month at Adira Finance, most of my time was spent understanding the basics of JavaScript, learning the company system, and how the system actually works in development and production. The team was super supportive and follows an Agile workflow with two-week sprints, which helped me understand how features move from planning to developemnt and finally ready for production.",
      "I started by cloning both the frontend and backend repositories and learning the structures. At this stage, I also learned how different services communicate using Kafka by creating my own project that sent and received messages.",
      "My first mentor asked me to help him with Mage AI schedulers using cron-based triggers and in this day I also learned how development teams manage tickets using Jira, repositories in Bitbucket, and documentation in Confluence.",
      "I started learning BackEnd and Frontend code using node.Js, next.Js, Kafka, and PostgreSQL, to better my understanding of real ticket problems later on ",
      "And near middle of the month, I was assigned my first real ticket, which involved fixing a minor UI issue which is to copywrite a text on the front end and made a toast component for better user experience.",
      "Overall, the first month was all about getting acclimated to the new environment, understanding the tech stack, and preparing myself for more complex tasks ahead.",
      "A few new tips, I learned this month is that usin WebP is better than using JPG/PNG "
    ]
  },
  {
    period: "Month 2",
    title: "First Real Problems",
    content: [
      "Around the second month, I began handling more frontend and backend-related tasks. One of the first major features I worked on was the Retry Page, which later became my introduction to race conditions.",
      "Some bugs didn’t appear consistently — they came and went depending on timing and event order. Debugging these issues taught me that not all bugs are caused by incorrect logic; sometimes they are caused by assumptions about when something should happen.",
      "During this phase, I also started learning git workflows, code reviews, best practice, and writing clean code. I also learned that cherry-picking commits is a useful skill that cannot be ignored and every commit and change should be self tested.",
      "By the end of the month, I also learned the fastify framework andhow to create an endpoint using fastify "
    ]
  },
  {
    period: "Month 3",
    title: "Building Features & Navigating the System",
    content: [
      "On the third month, I worked on a new page creation and learned to navigate through the pages.",
      "In this month, I also modify my first payload for B2B system and learned how to send the payload to the frontend system.",
      "Lastly, I learned the reporting system using Mage AI and BigQuery aswell as running docker on my device. "
    ]
  },
  {
    period: "Month 4",
    title: "Navigating Backend Systems & Data Handling",
    content: [
      "During this period, I worked on several backend-related tasks that helped me better understand data handling and system integration.",
      "One of the key learnings was migrating existing queries to BigQuery, where I learned how to adapt and optimize queries to ensure they remained efficient and compatible within the new data environment.",
      "I also developed a function for the ACI API, which simulates an API call similar to testing with Postman. After triggering the function, it returns a response based on the provided payload. To support development and testing, I implemented a getDummyACI function that returns mock data matching the expected response structure.",
      "In addition, I worked on inserting data into the History VA table. This followed a similar concept to the ACI API function, but instead of returning data, the function performs an insert operation into the database. This task involved collaboration with other team members, giving me the opportunity to coordinate, communicate, and work closely with people from different teams.",
      "I also setup my local enviroment to run the IOS application to better debug the bugs on IOS devices.",
      "Lastly I do some payload modification."
    ]
  },
  {
    period: "Month 5",
    title: "Handling Integrations & System Challenges",
    content: [
      "This month, I found a blocker in which self-testing was particularly challenging, as running the system locally required multiple services such to be active simultaneously. Some of these services depended on the internal office network, and due to limited access as an intern, I frequently encountered issues such as domain access restrictions.",
      "I also made improvements to the user interface by adding updated wording and a new image to the loan disbursement result page to enhance clarity and user experience.",
      "During this time, I was introduced to a new internal system called Metabase, which is used as a monitoring and scheduling tool to track data for the business team.",
      "I was responsible for handling a story goal related to a journal remapping, which involved restructuring and aligning journal data to meet the expected format and business requirements.",
      "Throughout this period, there were multiple system issues, including frequent restarts of service. These issues were often related to unoptimized queries, and some production incidents occurred due to missed cherry-picks during deployment.",
      "From working on remapping journal, I learned practical implementation tips, such as creating separate files to store different payload variations and referencing them when needed to improve maintainability and testing efficiency."
    ]
  },
  {
    period: "Month 6",
    title: "Deepening System Integration & Reporting Workflows",
    content: [
      "During this period, I focused on refining existing features and handling more complex system integrations, particularly around reporting and business-driven requirements.",
      "One of the tasks involved enhancing an insurance-related integration, which mainly required adding new cases and adjusting fields based on evolving business needs.",
      "I also created and updated queries to customize how names are displayed, ensuring the data presentation matched business expectations.",
      "In parallel, I worked on enhancing wording. where I encountered many edge cases that required careful validation to ensure the system behaved correctly across different scenarios.",
      "I made a mistake in which exclusion logic was placed incorrectly, which led to further investigation and eventually moving the logic into the appropriate integration reporting module to ensure consistent behavior.",
      "I continued working on a B2B-related story by adding new fields to support additional business requirements.",
      "At this stage, I began actively using JavaScript playgrounds to test and validate the functions I developed, which significantly improved my debugging speed and confidence when handling logic.",
      "I also explored existing code flows related to a home screen change, allowing me to better understand the system’s structure and dependencies before making modifications.",
      "Additionally, I built a Metabase dashboard for the business team, enabling them to filter and analyze data based on selected dates.",
      "Towards the end of the period, I started developing the correct data display logic for the home loan screen, ensuring the information shown to users aligned with updated requirements."
    ]
  },
  {
    period: "Month 7",
    title: "Owning Complex Business Logic & Testing Practices",
    content: [
      "During this period, I spent a significant amount of time working on a tab feature, focusing on correcting data display and preparing logic to handle late fee scenarios, even though some of these cases were not yet included in the active sprint.",
      "I also made adjustments to B2B-related values to ensure the data aligned correctly with updated business rules.",
      "The tab. page involved a large number of cases and scenarios, requiring careful handling of different conditions, edge-cases logic, zero amount cases, and backdated data handling for specific scenarios. This pushed me to think more defensively when implementing conditional logic.",
      "Most of my development effort during this period was centered around the tab page, as it touched multiple business rules and edge cases that needed to be validated thoroughly.",
      "To ensure stability and avoid conflicts, I migrated my loan tab work into a separate branch created from the production branch, allowing for safer development and clearer change isolation.",
      "Similarly, I moved B2B-related integration work into its own branch, also created from the production branch, so cherry-picking will be easier when the time comes to merge changes.",
      "I also ran and verified iOS configuration changes using a shared development branch, ensuring the application continued to function correctly across environments (Android and IOS).",
      "I was introduced to unit testing practices through guidance from my mentor.",
      "I also updated Metabase queries to support changes in UAT tables related data, enabling more accurate data validation for testing purposes.",
      "I handled updates related to B2B restructuring for email communication, ensuring the data passed to notification systems reflected the latest business logic.",
      "Towards the end of the period, I ran and validated unit tests using jest to ensure the implemented changes behaved as expected."
    ]
  },
  {
    period: "Month 8",
    title: "Expanding Payloads and UI Enhancements",
    content: [
      "During this period, I continued working on B2B-related payload changes while also providing data using queries for business purposes.",
      "I created and refined queries in Metabase to display aging-related reports and other supporting metrics, enabling better visibility for business users. To support long-term maintainability, I documented these queries and their context using Obsidian.",
      "I also worked on the email B2B issuance payload, which followed a similar concept to previous B2B payload modifications. The key difference was that this payload was designed to be delivered via email in CSV format.",
      "On the frontend side, I implemented an empty state component to handle scenarios where a user’s payment had been fully settled, ensuring the interface communicated the correct status clearly.",
      "Additionally, I added logic to redirect users to a pop-up flow when a row was missing, improving error handling and user guidance in edge-case scenarios."
    ]
  },
  {
  period: "Month 9",
  title: "Stabilizing Production Logic & Strengthening Frontend–Backend Integration",
  content: [
    "During this period, I worked on multiple stabilization and integration-focused tasks, particularly around B2B flows and frontend–backend data consistency. I updated time format handling for B2B insurance features.",
    "One of the key tasks involved resolving issues related to bank name handling. I learned how to extend existing database fields that store JSON objects by injecting additional values from backend events. These values were then consumed on the frontend to distinguish between similar statuses, enabling clearer state handling based on combined conditions.",
    "Turns out the dev branch and the production branch is totally different in terms of UI (which is bad :/), So I created a hotfix branch to address discrepancies between the main and production branches related to bank name rejection logic.",
    "I also worked on a sprint goal related to bank parameter features on the frontend, connecting backend data to the UI layer. This involved creating a new model in a master store and consuming backend-provided properties through an existing master service integration.",
    "As part of this task, I implemented and completed unit tests with full coverage with my fellow intern to ensure the bank parameter logic behaved correctly and remained maintainable.",
    "Towards the end of the period, I began supporting regression tickets (upgrading react because of the crypro exploit), where I encountered multiple issues related to race conditions introduced during a major framework version upgrade. This experience further strengthened my understanding of asynchronous behavior and state consistency in complex applications."
  ]
},
{
  period: "Month 10",
  title: "Production Support, Regression Handling, and Race Condition Fixes",
  content: [
    "During this period, I was fully involved in supporting regression tickets, focusing on stabilizing features affected by recent changes and framework upgrades.",
    "I handled multiple regression issues and errors on calculations, ensuring the logic and UI behavior remained consistent with business expectations.",
    "Several bugs related to bank rejection flows were addressed, including navigation issues, UI fixes, and overall state handling to ensure users were guided correctly through rejection scenarios.",
    "One of the more complex tasks involved fixing a race condition on the virtual account page. The issue occurred because the page depended on asynchronous notification events before refreshing data. To resolve this, I implemented a conditional approach that temporarily returned early when the amount was zero, waited for the latest data refresh, and then re-evaluated the state once all relevant events had completed.",
    "I also worked on fixing an issue affecting subsequent disbursement flows for another internal team. In this case, users were onboarded with one bank name and later updated to a different bank, causing the bank name to disappear during subsequent disbursements. The fix involved ensuring the bank name was consistently stored at the lending application level and retrieved correctly based on the first disbursement data."
  ]
},
{
  period: "Month 11",
  title: "Refining Edge-Case Logic and User Protection Flows",
  content: [
    "During this period, I worked on enhancing bank name logic to improve data consistency and reduce unnecessary variations appearing in the admin side.",
    "This enhancement involved normalizing bank names by excluding certain titles and abbreviations on the review page. I used regex functions to distinguish and filter these variations, ensuring cleaner and more standardized data across systems.",
    "I also implemented additional handling for scenarios where if rows were missing. In cases where data failed to be generated, the system now displays a pop-up to prevent users from proceeding with payments, helping avoid incorrect transactions and improving overall system safety."
  ]
},
{
  period: "Month 12",
  title: "Closing the Journey with Gratitude and Growth",
  content: [
    "In my final month, I worked on an AP-related story that involved both backend and frontend development. This included implementing new functionality, building the frontend form, and creating supporting endpoints with filtering capabilities based on status.",
    "Beyond the technical work, this month marked the end of my learning journey within the LSS program. Looking back, I am deeply grateful for the team I worked with and the mentors who consistently guided me, challenged my thinking, and supported my growth as an engineer.",
    "This experience has shaped how I approach problem-solving, collaboration, and responsibility in a real production environment. I truly appreciate the trust, knowledge sharing, and countless discussions along the way, and I hope that one day we can cross paths again—sharing stories, laughter, and meaningful conversations as peers. <3"
  ]
},
{
  period: "Seb signing out, thank you LSS team!! You guys are the best <3",
  title: "",
  content: [
    ""
   ]
},
];