import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'
import { CandleChart } from '../components'
import CandleChartProvider from '../contexts/CandleChartContext'

const CandleChartScreen = () => (
  <CandleChartProvider>
    <BackgroundImage source={require('../assets/back.png')}>
      <CandleChart.Header />
      <CandleChart.Chart />
      <CandleChart.Box />
    </BackgroundImage>
  </CandleChartProvider>
)

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
`

export default CandleChartScreen