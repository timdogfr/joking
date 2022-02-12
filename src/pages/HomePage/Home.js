import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "./../../redux/data/dataActions";
import {StyledButton}from '../../components/styles/button.styled';
import {StyledRoundButton}from './../../components/styles/styledRoundButton.styled';
import {StyledLink}from './../../components/styles/link.styled';
import {ResponsiveWrapper}from './../../components/styles/responsivewrapper.styled';
import * as s from "./../../styles/globalStyles";
import  ButtonIcon  from "../../components/ButtonIcon/buttonIcon";
import Benefits from "../../components/Benefits/benefits";
import Roadmap from "../../components/Roadmap/Roadmap";
import Navbar from "../../components/Navbar/Navbar";
import {AiFillTwitterCircle} from "react-icons/ai";
import {SiDiscord} from "react-icons/si";
import HeroSection from "../../components/HeroSection/HeroSection";
import Team from "../../components/Team/Team";
const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT. Max limit is One.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [displayCost , setDisplayCost] = useState(0.075);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let displayCost = CONFIG.DISPLAY_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
    setDisplayCost(CONFIG.DISPLAY_COST*parseFloat(newMintAmount).toString());
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 15) {
      newMintAmount = 15;
    }
    setMintAmount(newMintAmount);
    setDisplayCost(parseFloat(CONFIG.DISPLAY_COST*newMintAmount).toFixed(3));
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
   
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

    return (
        <>
        
        <Navbar/>
        <HeroSection/>

        <s.FlexContainer
           flex={1}
            jc={"space-evenly"}
            ai={"center"}
            fd={"row"}
            style={{
              zIndex: "1",
              marginTop: "-55vh",
            }}
        >
        
        <s.Mint>
          <s.Image src={"config/images/mint_nft.png"} wid={70} />
          <s.TextSubTitle>3000 NFTS</s.TextSubTitle>
          <s.SpacerLarge />

          <s.FlexContainer
          fd={"row"}
          ai={"center"}
          jc={"space-between"}
          >
          <s.TextTitle>Balance</s.TextTitle>
          <s.TextTitle>100</s.TextTitle>
          </s.FlexContainer>
         
          <s.SpacerSmall />
          <s.Line />
          <s.SpacerLarge />
          <s.FlexContainer
          fd={"row"}
          ai={"center"}
          jc={"space-between"}
          >
          <s.TextTitle>Amount</s.TextTitle>

          <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <StyledRoundButton
                        style={{ lineHeight: 0.4 }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          decrementMintAmount();
                        }}
                      >
                        -
                      </StyledRoundButton>
                      <s.SpacerMedium />
                      <s.TextDescription color={"#dbac36"} size ={"2.5rem"}>
                        {mintAmount}
                      </s.TextDescription>
                      <s.SpacerMedium />
                      <StyledRoundButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          incrementMintAmount();
                        }}
                      >
                        +
                      </StyledRoundButton>
                    </s.Container>
          
          <s.maxButton>Max</s.maxButton>
          </s.FlexContainer>
          <s.SpacerSmall />
          <s.Line />

          <s.SpacerLarge />
          <s.FlexContainer
          fd={"row"}
          ai={"center"}
          jc={"space-between"}
          >
          <s.TextTitle>Total</s.TextTitle>
          <s.TextTitle color={"#dbac36"}>{displayCost}</s.TextTitle>
          </s.FlexContainer>
          <s.SpacerSmall />
          <s.Line />
          <s.SpacerSmall />
          <s.Container ai={"center"} jc={"center"} fd={"row"}>
                      <s.connectButton
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {" "}
                        {claimingNft ? "Confirm Transaction in Wallet" : "Mint"}{" "}
                      </s.connectButton>{" "}
                    </s.Container>{" "}
         
        </s.Mint>

        <s.CatDiv>
        <s.Image src={"config/images/cat.png"} wid={50} />
        <s.TextDescription>
          Each JUngle Cats NFT is unique and includes a 3d model that can be used across the metaverse.
        </s.TextDescription>
        </s.CatDiv>

        </s.FlexContainer>



       
        </>
    )
}

export default Home
