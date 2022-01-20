import Card from './Card';
import './App.css';
function App() {
let myPrices = [
  {
    plan: "FREE",
    price: "$0/month",
    features: [
      {
        name: "Single User",
        isEnabled: true
      },
      {
        name: "50GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: false
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: false
      },
      {
        name: "Free Subdomain",
        isEnabled: false
      },
      {
        name: "Monthly Status Reports",
        isEnabled: false
      }
    ]
  },
  {
    plan: "PLUS",
    price: "$9/month",
    features: [
      {
        name: "𝟱 𝗨𝘀𝗲𝗿𝘀",
        isEnabled: true
      },
      {
        name: "50GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled:true        },
      {
        name: "Free Subdomain",
        isEnabled:true        },
      {
        name: "Monthly Status Reports",
        isEnabled: false        }
    ]
  },
  {
    plan: "PRO",
    price: "$49/month",
    features: [
      {
        name: "𝐔𝐧𝐥𝐢𝐦𝐢𝐭𝐞𝐝 𝐔𝐬𝐞𝐫𝐬",
        isEnabled: true
      },
      {
        name: "150GB Storage",
        isEnabled: true
      },
      {
        name: "Unlimited Public Projects",
        isEnabled: true
      },
      {
        name: "Community Access",
        isEnabled: true
      },
      {
        name: "Unlimited Private Projects",
        isEnabled: true
      },
      {
        name: "Dedicated Phone Support",
        isEnabled: true
      },
      {
        name: "Unlimited Free Subdomains",
        isEnabled: true
      },
      {
        name: "Monthly Status Reports",
        isEnabled: true
      }
    ]
  }
]
 return (
    <>
        <section className="pricing py-5">
          <div className="container">
            <div className="row">
              {
                myPrices.map( (obj) =>{return<Card data={obj}></Card>})   
              }
            </div>
          </div>
        </section>
    </>
  );
}

export default App;








