import Hero from "../components/Hero"
import FeatureCard from "../components/FeatureCard"
export default function Index() {
  return (
    <>
    <Hero/>
    <section className="flex flex-col p-2 flex-wrap py-12 items-center">
          <h1 className="font-bold text-3xl text-green-700">
            How we serve You Better
          </h1>
          <p className="text-lg mt-3 text-green-700">Let us serve you well</p>
          <section className="w-full md:px-28 flex mt-4 flex-wrap pb-32">
            <FeatureCard
              img_url="/images/icons/Heart1.png"
              title="User Friendly"
              desc="We have great user interface that makes navigating accounting tasks fun and easy"
            />
            <FeatureCard
              img_url="/images/icons/Shield.png"
              title="Safe & Secure"
              desc="We have great user interface that makes navigating accounting tasks fun and easy."
            />
            <FeatureCard
              img_url="/images/icons/AlarmIcon.png"
              title="Real-time Notifications"
              desc="We have great user interface that makes navigating accounting tasks fun and easy."
            />
            <FeatureCard
              img_url="/images/icons/Heart.png"
              title="Capture Receipts"
              desc="We have great user interface that makes navigating accounting tasks fun and easy."
            />

            <FeatureCard
              img_url="/images/icons/ChatIcon.png"
              title="24/7 Chat"
              desc="We have great user interface that makes navigating accounting tasks fun and easy."
            />
            <FeatureCard
              img_url="/images/icons/Heart1.png"
              title="Cloud-hosted"
              desc="We have great user interface that makes navigating accounting tasks fun and easy."
            />
          </section>
        </section>
        <footer className="bg-white flex flex-wrap py-8 px-24 md:px-2 dark:bg-black min-h-[50vh]">
        <div className="w-full md:w-1/5 flex justify-center items-center">
          <span className="dark:text-white">Logo</span>
        </div>
        <div className="w-full mt-2 md:w-1/5 flex justify-center items-center">
          <p className="dark:text-white text-xs font-light">
            Elit laboris aliqua ex duis aliquip. Commodo enim culpa eiusmod
            adipisicing anim veniam officia excepteur labore ad nisi.
            Reprehenderit est ea consequat eiusmod consequat est eiusmod amet.
            Occaecat esse cupidatat magna aliquip deserunt officia exercitation.
            Amet culpa excepteur
          </p>
        </div>
        <div className="w-full mt-2 md:w-1/5 flex items-center md:justify-center">
          <div className="flex flex-col space-y-2">
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Home</p>
            </a>
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Archives</p>
            </a>
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Write To Us</p>
            </a>
            <a
              href="/single"
              className="flex dark:text-white dark:hover:text-purple-600 hover:text-purple-600 items-center space-x-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <p className="font-bold text-sm">Blog</p>
            </a>
          </div>
        </div>
        <div className="w-full mt-2 md:w-1/5 justift-center flex flex-col justify-center items-center">
          <p className="dark:text-white">Contact</p>
          <section className="flex mt-2 space-x-2">
            <a href="#">
              <i className="fab text-[#1da1f2] fa-2x fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab text-[#3b5998] fa-2x fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fab fa-2x text-[#0088cc] fa-telegram-plane"></i>
            </a>
          </section>
        </div>
      </footer>
    </>
        
  )
}