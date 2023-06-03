import Slider, { SliderItem } from "../../components/slider"
import sliderItem from '../../assets/main-slider.jpg'
import sliderItem2 from '../../assets/slider-item2.jpg'
import CollectionBlock from "../../components/collection-block"
import { BlockData1, BlockData2, collectionData1, collectionData2 } from "../../data/data"
import SingleBlock from "../../components/single-block"
import Footer from "../../components/footer"

const MainPage = () => {
  return (
    <>
      <Slider>
        <SliderItem><img src={sliderItem} alt="" /></SliderItem>
        <SliderItem><img src={sliderItem2} alt="" /></SliderItem>
      </Slider>
      <CollectionBlock  {...collectionData1} />
      <SingleBlock {...BlockData1} />
      <CollectionBlock {...collectionData2} />
      <SingleBlock {...BlockData2} />
      <Footer />
    </>
  )
}

export default MainPage