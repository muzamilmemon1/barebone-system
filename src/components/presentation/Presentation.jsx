import { Link } from "react-router-dom";
import Card from "../shared/Card"; // Importing the Card component

function Presentation() {
  const topics = [
    {
      title: "Cypress: A Modern Testing Framework for Full-Stack Automation",
      content: `Cypress is a powerful end-to-end testing framework that revolutionizes how we test both frontend and backend applications. It is built for modern web applications and allows for real-time reloading, easy debugging, and faster test execution.

                Key Features and Benefits:
                - Real-Time Testing
                - API Testing
                - DOM Manipulation & Element Interaction
                - Automatic Waiting
                - Built-in Debugging
                - Screenshots and Video Recording

                Why Cypress for Bank Alfalah:
                - Full-Stack Testing (API & UI)
                - Efficient and Scalable Testing
                - Developer-Friendly
                - End-to-End Automation`,
    },
    {
      title: "Other Testing Tools Overview",
      content: `While Cypress is a powerful solution, other tools also have unique benefits that can complement our testing strategies.

                - Playwright: Excellent for cross-browser testing
                - Puppeteer: A powerful headless browser automation tool
                - Selenium: The veteran in the space
                - Jest: Ideal for unit testing in JavaScript
                - Mocha & Chai: Popular for JavaScript unit testing
                - Postman: Great for manual API testing
                - SoapUI: A robust tool for testing SOAP and REST web services.`,
    },
    {
      title: "Agile and DevOps Integration",
      content: `By adopting Agile and DevOps methodologies, we can streamline development and testing. Using Continuous Integration (CI) and Continuous Deployment (CD), we can ensure that new features, improvements, and fixes are delivered to production swiftly and reliably, helping Bank Alfalah keep pace with the fast-moving digital landscape.`,
    },
    {
      title: "Modern Testing in Digital Transformation",
      content: `As Bank Alfalah continues to grow as a digital-first bank, adopting modern practices is key to improving the Software Testing Life Cycle (STLC). 

                By embracing cutting-edge tools like Cypress and Playwright, the traditional STLC can be streamlined and enhanced. These tools allow faster feedback loops, automated regression testing, and seamless integration with CI/CD pipelines, enabling continuous testing throughout the development cycle.

                The STLC can benefit from innovations such as shift-left testing, where testing begins earlier in the development process. This proactive approach reduces the cost and effort of fixing issues later on.`,
    },
    {
      title: "Compliance with Regulations and Data Privacy",
      content: `As a financial institution, Bank Alfalah operates under strict rules and policies outlined by the State Bank of Pakistan (SBP). These regulations govern the tools and technologies permitted for use, ensuring that security, privacy, and compliance standards are strictly adhered to.

                Finding the right balance between modern testing tools and compliance with SBP guidelines will be critical for our success in maintaining customer trust and security while driving innovation in our digital transformation efforts.`,
    },
  ];

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
          Presentation: Embracing Modern Testing Tools
        </h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Hi everyone, this is the demo I have created to convince you to adopt modern testing technologies like Cypress, Playwright, and many others
          that are widely used across the world. Here, I'll present how adopting these tools can help us grow and improve our testing process at Bank Alfalah.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
            <Card key={index} title={topic.title} content={topic.content} />
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