import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

// Components
import { 
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  GradientBackgroundCon,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubtitle,
  QuoteGeneratorTitle
} from "@/components/QuoteGenerator/QuoteGeneratorElements";

// Assets
import Clouds1 from "@/assets/cloudy.png";
import Clouds2 from "@/assets/sunny.png";
import { GraphQLResult, generateClient } from "aws-amplify/api";
import { quotesQueryName } from "@/src/graphql/queries";

// interface for our DynamoDB object
interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

// type guard for our fetch function
function isGraphQLResultForQuotesQueryName(response: any): response is GraphQLResult<{
  quotesQueryName: {
    items: [UpdateQuoteInfoData];
  };
}> {
  return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
}

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  const client = generateClient();

  // Function to fetch or DynamoDB object (quotes generated)
  const updateQuoteInfo = async () => {
    try {
      const response = await client.graphql({
        query: quotesQueryName,
        authMode: "iam",
        variables: {
          queryName: "LIVE"
        },
      });
      
      // Create type guard
      if (!isGraphQLResultForQuotesQueryName(response)) {
        throw new Error('Unexpected response from client.graphql');
      }
      
      if (!response.data) {
        throw new Error('Response data is undefined');
      }
      
      const receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;
      
      setNumberOfQuotes(receivedNumberOfQuotes);
    } catch (error) {
      console.log('error getting quote data', error);
    }
  }
  
  useEffect(() => {
    updateQuoteInfo();
  });

  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator Modal Pop-Up */}
        {/* <QuoteGeneratorModal
          open={openGenerator}
          close={handleCloseGenerator}
          processingQuote={processingQuote}
          setProcessingQuote={setProcessingQuote}
          quoteReceived={quoteReceived}
          setQuoteReceived={setQuoteReceived}
        /> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubtitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by{" "}
              <FooterLink
                href="https://zenquotes.io"
                target="_blank"
                rel="noopener nonreferrer"
              >
                ZenQuotes API
              </FooterLink>.
            </QuoteGeneratorSubtitle>

            <GenerateQuoteButton 
              // onClick={null}
            >
              <GenerateQuoteButtonText>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 src={Clouds1} height="300" alt="CloudyBackground1" />

        <BackgroundImage2 src={Clouds2} height="300" alt="CloudyBackground2" />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with ❤️ by{" "}
            <FooterLink
              href="https://giulianosoria.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              @GiulianoSoria{" "}
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </>
  );
}
