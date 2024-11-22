import React from 'react'

const Cards = () => {
  return (
    <>
    <div>
        <div></div>
        <h2>Brands Led and Founded</h2>
        <div></div>
    </div>
    <div>
        <div>
            <div>
                <div>
                    <p>MTC</p>
                    <p>Outsourcing Platform</p>
                </div>
                <Image src="/assets/imgs/mtc.png" width={58} height={40} />
            </div>
            <div>
                <p>MTC is an outsourcing platform that helps businesses delegate key tasks to experts. With skilled professionals, MTC optimizes processes, cuts costs, and boosts productivity, letting companies focus on core activities.</p>
                <p>2019 - NOW</p>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <p>SuperTek</p>
                    <p>Crypto mining technical services</p>
                </div>
                <Image src="/assets/imgs/supertek.png" width={136} height={29}/>
            </div>
            <div>
                <p>SuperTek provides expert technical services for cryptocurrency mining, ensuring optimal performance, maintenance, and troubleshooting to help mining businesses maximize profitability.</p>
                <p>2017 - NOW</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cards