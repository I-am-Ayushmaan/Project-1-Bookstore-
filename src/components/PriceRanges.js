import {Space, InputNumber} from 'antd';
import "./PriceRanges.css";

function PriceRanges({priceMin, setPriceMin, priceMax, setPriceMax}) {

        function changePrice(min,max){
            setPriceMin(min);
            setPriceMax(max);
        }

  return (
    <>
    <h2>
        Price Ranges
    </h2>
    <p className="prices" onClick={() => changePrice(0,5)}>Under Rs50</p>
    <p className="prices" onClick={() => changePrice(5,10)}>Rs50 to Rs400</p>
    <p className="prices" onClick={() => changePrice(10,20)}>Rs400 to Rs1000</p>
    <p className="prices" onClick={() => changePrice(20,100)}>Rs1000 & Above</p>
    <Space>
    <InputNumber
      value={priceMin}
      formatter={value => `Rs ${value}`}
      onChange={(value) => changePrice(value,priceMax)}
    />
    <InputNumber
      value={priceMax}
      formatter={value => `Rs ${value}`}
      onChange={(value) => changePrice(priceMin,value)}
    />
    </Space>
    <br/>
    <br/>
    </>
  )
}

export default PriceRanges