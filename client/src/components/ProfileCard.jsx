import React from "react";

const ProfileCard = () => {
  return (
    <div
      className="container-md flex flex-col justify-center bg-gray-100 pb-10 pt-8 dark:bg-slate-900 dark:text-slate-200 md:flex-row"
      id="trainer"
    >
      <div className="flex flex-wrap justify-center rounded px-2">
        <div className="h-auto w-full border bg-white shadow-lg dark:border-0 dark:bg-slate-900 md:w-2/4 lg:w-1/4">
          <div className="p-6">
            <div className="max-w-100 mb-6 flex h-64 items-center justify-center rounded-xl bg-gray-300 dark:bg-slate-950">
              <svg
                className="h-20 w-20 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a9 9 0 0 0 5-1.5 4 4 0 0 0-4-3.5h-2a4 4 0 0 0-4 3.5 9 9 0 0 0 5 1.5Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <h2 className="mb-2 text-2xl font-bold dark:text-white">
              John Doe
            </h2>
            <h3 className="mb-4 text-lg text-gray-600 dark:text-slate-300">
              Dietician
            </h3>
            {/* Contact */}
            <div className="mb-2 flex items-center rounded-full bg-gray-200 p-2 dark:bg-slate-950">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-slate-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
              </svg>

              <p className="ml-2 text-gray-600 dark:text-slate-300">
                123-456-7890
              </p>
            </div>
            {/* Email */}
            <div className="mb-2 flex items-center rounded-full bg-gray-200 p-2 dark:bg-slate-950">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-slate-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
              </svg>

              <p className="ml-2 text-gray-600 dark:text-slate-300">
                john.doe@example.com
              </p>
            </div>
            {/* Address */}
            <div className="mb-4 flex items-center rounded-full bg-gray-200 p-2 dark:bg-slate-950">
              <svg
                className="h-6 w-6 text-gray-800 dark:text-slate-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 3.3a1 1 0 0 1 1.4 0l6 6 2 2a1 1 0 0 1-1.4 1.4l-.3-.3V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3c0 .6-.4 1-1 1H7a2 2 0 0 1-2-2v-6.6l-.3.3a1 1 0 0 1-1.4-1.4l2-2 6-6Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="ml-2 text-gray-600 dark:text-slate-300">
                New York, USA
              </p>
            </div>
            <div className="flex">
              {/* Twitter */}
              <a
                href="#"
                className="mr-2 rounded-full bg-gray-200 p-2 text-gray-600 hover:text-gray-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-slate-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Linkedin */}
              <a
                href="#"
                className="mr-2 rounded-full bg-gray-200 p-2 text-gray-600 hover:text-gray-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-slate-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.8H4v10.7h3.2V8.8Z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="#"
                className="rounded-full bg-gray-200 p-2 text-gray-600 hover:text-gray-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:text-slate-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border p-6 shadow-lg dark:border-0 md:w-2/4">
          <h2 className="mb-4 text-3xl font-bold dark:text-white">
            Personal Details
          </h2>
          <p className="mb-4 md:line-clamp-3">
            Far far away, behinds the words mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            lived in Book marks grove rights at the coasts of the Semantics, a
            large language ocean. A small river named Duden flows by the their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country, in which roasted.
          </p>
          <h3 className="mb-2 text-xl font-bold">
            The Healthy Life Style For All
          </h3>
          <p className="mb-4 md:line-clamp-3">
            There are many variations of passangers of Lorem Ipsum availables
            but on the majority have suffered alteration Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Habitasse .
          </p>
          <ul className="mb-4 ms-6 list-disc">
            <li>
              Dynamically target high-payoff intellectual capital for customized
            </li>
            <li>Interactively procrastinate high-payoff content</li>
            <li>
              Credibly reinter mediate backend ideas for cross-platform models
            </li>
          </ul>
          <h3 className="mb-2 text-xl font-bold">
            Make real time a health improvements
          </h3>
          <p className="mb-4 md:line-clamp-3">
            Proactively envisioned multimedia based expertise crosses media
            growth strategies. Seamlessly visualize quality intelectual captal
            without superor collaboration idea sharing Holistically pontficate
            installed based portals after maintainabled products. engaged world
            wide methodologies with enabled Completely pursue scalable customer
            service through sustainable potentialities
          </p>
          <ol className="mb-4 ms-6 list-decimal">
            <li>
              It brings the right people together with all the right information
              and tools to get work done
            </li>
            <li>
              We provide operational efficiency, data security, and flexible
              scale
            </li>
            <li>
              Your best work, together in one package that works seamlessly from
              your computer
            </li>
          </ol>
          <p className="md:line-clamp-3">
            User generated content in real-time will have multiple touchpoints
            for offshoring. Capitalize on low hanging fruit to identify a
            ballpark value added activity to beta test. Override the digital
            divide with additional clickthrough's from DevOps. Nanotechnology
            immersion along the information highway will close the loop on
            focusing solely on the bottom line.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
