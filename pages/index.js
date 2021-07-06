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
    </>
        
  )
}