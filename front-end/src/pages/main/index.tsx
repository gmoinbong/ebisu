import Slider, { SliderItem } from "../../components/slider"
import sliderItem from '../../assets/main-slider.jpg'
import sliderItem2 from '../../assets/slider-item2.jpg'
import CollectionBlock from "../../components/collection-block"
import { BlockData1, BlockData2, collectionData1, collectionData2 } from "../../data/blockData"
import SingleBlock from "../../components/single-block"

const MainPage = () => {
  return (
    <section style={{ backgroundColor: "#f4f4f4" }}>
      <Slider>
        <SliderItem><img style={{ width: '100%' }} src={sliderItem} alt="" /></SliderItem>
        <SliderItem><img style={{ width: '100%' }} src={sliderItem2} alt="" /></SliderItem>
      </Slider>
      <CollectionBlock  {...collectionData1} />
      <SingleBlock {...BlockData1} />
      <CollectionBlock {...collectionData2} />
      <SingleBlock {...BlockData2} />
    </section>)
}

export default MainPage