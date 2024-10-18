import React from "react";
import { Link } from "react-router-dom";

function Presentation() {
  const topics = [
    {
      title: "Cypress: A Modern Testing Framework for Full-Stack Automation",
      content: `Cypress is a powerful end-to-end testing framework that revolutionizes how we test both frontend and backend applications. It is built for modern 
                web applications and allows for real-time reloading, easy debugging, and faster test execution.
    
                ### Key Features and Benefits:
                - **Real-Time Testing:** Instant feedback during the test runs, enabling developers to see changes as they happen.
                - **API Testing:** Cypress allows easy and powerful API testing for backend services, enabling seamless testing across the full stack.
                - **DOM Manipulation & Element Interaction:** It has powerful tools to manipulate the DOM, making frontend testing faster and more efficient.
                - **Automatic Waiting:** Cypress automatically waits for commands and assertions, reducing the need for manual timeouts.
                - **Built-in Debugging:** Comes with advanced debugging tools, making it easier to identify and fix issues.
                - **Screenshots and Video Recording:** Every test run is recorded, enabling thorough test analysis and debugging.
    
                ### Why Cypress for Bank Alfalah:
                - **Full-Stack Testing (API & UI):** Cypress seamlessly integrates with backend services, making it ideal for testing APIs and frontends together.
                - **Efficient and Scalable Testing:** As Bank Alfalah moves towards scaling its digital platforms, Cypress ensures that our tests remain efficient, reliable, and fast.
                - **Developer-Friendly:** With its easy-to-understand syntax, Cypress is ideal for quick adoption across teams, reducing the learning curve for testers and developers alike.
                - **End-to-End Automation:** From login forms to API responses, Cypress ensures that the entire user flow can be tested automatically and thoroughly.`,
    },
    {
      title: "Other Testing Tools Overview",
      content: `While Cypress is a powerful solution, other tools also have unique benefits that can complement our testing strategies.
    
                - **Playwright:** Excellent for cross-browser testing, allowing tests to be executed in Chrome, Firefox, and WebKit, ensuring comprehensive coverage.
                - **Puppeteer:** A powerful headless browser automation tool, mainly used for controlling Chromium browsers for testing, scraping, and automation.
                - **Selenium:** The veteran in the space, still useful for testing across multiple browsers and devices but lacks some modern features like auto-waiting.
                - **Jest:** Ideal for unit testing in JavaScript, used particularly for frontend applications.
                - **Mocha & Chai:** Popular for JavaScript unit testing, offering flexibility in choosing testing libraries and setups.
                - **Postman:** Great for manual API testing and automating API workflows.
                - **SoapUI:** A robust tool for testing SOAP and REST web services, focusing on API testing automation.`
    },
    {
      title: "Agile and DevOps Integration",
      content: `By adopting Agile and DevOps methodologies, we can streamline development and testing. Using Continuous Integration (CI) 
                and Continuous Deployment (CD), we can ensure that new features, improvements, and fixes are delivered to production swiftly and 
                reliably, helping Bank Alfalah keep pace with the fast-moving digital landscape.`,
    },
    {
      title: "Modern Testing in Digital Transformation",
      content: `As Bank Alfalah continues to grow as a digital-first bank, adopting modern practices is key to improving the Software Testing Life Cycle (STLC). 
                By embracing cutting-edge tools like Cypress and Playwright, the traditional STLC can be streamlined and enhanced. These tools allow faster 
                feedback loops, automated regression testing, and seamless integration with CI/CD pipelines, enabling continuous testing throughout the 
                development cycle.
    
                The STLC can benefit from innovations such as shift-left testing, where testing begins earlier in the development process. This proactive approach 
                reduces the cost and effort of fixing issues later on. Additionally, adopting practices like test automation, parallel execution, and cloud-based 
                testing environments ensures scalable and efficient testing.
    
                Leveraging these innovations helps Bank Alfalah achieve reduced testing time, improved test coverage, and enhanced collaboration between development 
                and testing teams, keeping the bank at the forefront of industry standards.`,
    },{
      title: "Compliance with Regulations and Data Privacy",
      content: `As a financial institution, Bank Alfalah operates under strict rules and policies outlined by the State Bank of Pakistan (SBP). These regulations 
                govern the tools and technologies permitted for use, ensuring that security, privacy, and compliance standards are strictly adhered to. One key aspect 
                is the handling of sensitive customer data, where it is crucial that this data remains secure and is not exposed to risks such as cloud storage in 
                uncontrolled environments.
    
                Due to privacy and security concerns, many banks, including Bank Alfalah, may limit or avoid the use of cloud-based testing platforms for sensitive 
                customer data. We understand the importance of following these regulations while still ensuring that our testing processes are efficient, scalable, 
                and secure. Finding the right balance between modern testing tools and compliance with SBP guidelines will be critical for our success in maintaining 
                customer trust and security while driving innovation in our digital transformation efforts.`,
    },
    
  ];

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Presentation: Embracing Modern Testing Tools
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Hi everyone, this is the demo I have created to convince you to adopt modern testing technologies like Cypress, Playwright, and many others 
          that are widely used across the world. Here, I'll present how adopting these tools can help us grow and improve our testing process at Bank Alfalah.
        </p>

       {/* Cards */}
        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-8 max-w-4xl mx-auto border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {topic.title}
              </h2>
              <p className="text-xl font-semibold leading-7 text-gray-700">
                {topic.content}
              </p>
            </div>
          ))}
        </div>

        {/* Back to Home Button */}
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Presentation;