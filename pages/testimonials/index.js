// data
import TestimonialSlider from "../../components/TestimonialSlider";
const testinomialSlider =() =>{
  return(
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center ">
        <h2 className="h2 mb-8 xl:mb-0">
          What clients <span className="text-accent">say.s</span>
        </h2>
        {/* slider */}
        <div>
        <TestimonialSlider />
        </div>
      </div>
    </div>
  )

}

export default testinomialSlider;
