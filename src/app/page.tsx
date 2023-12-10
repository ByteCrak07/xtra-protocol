import Image from "next/image";
import { Orbitron, Montserrat } from "next/font/google";
import styles from "./styles.module.css";
import Link from "next/link";

const orbitron = Orbitron({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
function Page() {
  const coinsCard = [

    {
      id: "2",
      iconName: "/assets/arbitrum.png",
    },
    {
      id: "3",
      iconName: "/assets/avalanche.png",
    },
    {
      id: "1",
      iconName: "/assets/polygon.jpeg",
    },
    {
      id: "7",
      iconName: "/assets/ethereum.png",
    },
    {
      id: "4",
      iconName: "/assets/celo.png",
    },
    {
      id: "5",
      iconName: "/assets/zetachain.jpg",
    },
    {
      id: "6",
      iconName: "/assets/1inch.png",
    },

  ];

  return (
    <>
      <div
        className={orbitron.className}
        style={{
          padding: 12,
          backgroundColor: "#F4DFC8",
          backgroundImage:
            "radial-gradient(circle at -8.9% 51.2%, #1A1A1A 0%, #333333 10%, #4C4C4C 15.9%, #666666 20%, #808080 24.4%, #999999 30%, #ADADAD 40%, #BBBBBB 45%, #CCCCCC 50%, #DDDDDD 55%, #E3E3E3 60%, #EFEFEF 70%, #F4F4F4 80%, #F8F8F8 90%, #FFFFFF 100%)",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            padding: 12,
            top: 0,
            right: 0,
          }}
        >
          {" "}
          <Link href="/launch">
            <button className={styles.launchButton}>Launch App</button>
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              className={styles.heading}
              style={{
                // font: "Orbitron",
                color: "transparent",
                fontSize: "25vh",
                fontWeight: 900,
                backgroundImage:
                  'url("https://media.giphy.com/media/88inhanctU1G4PEx7b/giphy.gif")',
                marginTop: "10vh",
                marginBottom: "-8vh",
              }}
            >
              X-TRA
            </h1>
            <h1
              style={{
                // font: "Orbitron",
                // color: "transparent",
                fontSize: "5vh",
                fontWeight: 900,
                marginBottom: "10vh",
              }}
            >
              Going the extra mile in DeFi
            </h1>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: "2vw",
            marginTop: "10vh",
          }}
        >
          {coinsCard.map((coin, index) => {
            return (
              <div
                key={`${index}-coin-card`}
                id={coin.id}
                className={`p-6 rounded-lg  ${styles.card} ${index % 2 == 0 ? styles.odd : styles.even
                  }`}
              >
                <Image
                  style={{ borderRadius: "50%" }}
                  src={coin.iconName}
                  width={150}
                  height={150}
                  alt="coin logo"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={orbitron.className}
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F4DFC8",
          backgroundImage:
            "radial-gradient(circle at 110% 51.2%, #1A1A1A 0%, #333333 15.9%, #666666 15.9%, #999999 24.4%, #BBBBBB 24.5%, #DDDDDD 40%, #EFEFEF 60%, #F8F8F8 80%, #FFFFFF 50%)",
          minHeight: "100vh",
          padding: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
          }}
        >
          <h1 className={styles.whyHeading}>Why</h1>
          <h1 className={styles.X}>
            X<span className={styles.wordSplit}>chain</span>
          </h1>
          <h1 className={styles.X}>
            Tra<span className={styles.wordSplit}>nsfer</span> ?
          </h1>
        </div>

        <div

          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className={`lg:flex ${styles.benefitCards}`}>
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              .
            </div>
            <div className="border-b border-l  lg:border-l-2 lg:border-b-2 rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className={styles.benefitHeader}>Lending</div>
                <p className={`text-gray-700 text-base mt-5 ${montserrat.className}`}>
                  With Xtra, you can lend your assets to users on different
                  blockchains, maximizing your lending opportunities. Empower
                  borrowers and earn across the blockchain spectrum.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`max-w-sm w-full lg:max-w-full lg:flex  ${styles.benefitCards}`}
          >
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              .
            </div>
            <div className=" lg:border-t-2 lg:border-r-2 rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className={styles.benefitHeader}>Borrowing</div>
                <p className={`text-gray-700 text-base mt-5 ${montserrat.className}`}>
                  Explore unparalleled flexibility in decentralized finance!
                  Borrow assets from a blockchain of your choice, irrespective
                  of where your assets reside. Xtra transcends chains, offering
                  you a borderless borrowing experience
                </p>
              </div>
            </div>
          </div>
          <div
            className={`max-w-sm w-full lg:max-w-full lg:flex ${styles.benefitCards}`}
          >
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              .
            </div>
            <div className="border-b border-l  lg:border-l-2 lg:border-b-2 rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className={styles.benefitHeader}>Diversify assets</div>
                <p className={`text-gray-700 text-base mt-5 ${montserrat.className}`}>
                  Easily diversify their digital assets across multiple
                  bockchain, mitigating risk and maximizing opportunities.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`max-w-sm w-full lg:max-w-full lg:flex ${styles.benefitCards}`}
          >
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              .
            </div>
            <div className="lg:border-t-2 lg:border-r-2 rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className={styles.benefitHeader}>Security Simplified</div>
                <p className={`text-gray-700 text-base mt-5 ${montserrat.className}`}>
                  Trust in the simplicity of secure sart contracts and
                  encryption, making your lending journey straightforward and
                  protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>Copyright@2023 zkSquad</div>
    </>
  );
}

export default Page;
