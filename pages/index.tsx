import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { GradientBackgroundCon } from "@/components/QuoteGenerator/QuoteGeneratorElements";

export default function Home() {
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
        {/* <QuoteGeneratorCon>
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

            <GenerateQuoteButton onClick={handleOpenGenerator}>
              <GenerateQuoteButtonText >
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon> */}

        {/* Background images */}
        {/* <BackgroundImage1 src={Clouds1} height="300" alt="CloudyBackground1" /> */}

        {/* <BackgroundImage2 src={Clouds2} height="300" alt="CloudyBackground2" /> */}

        {/* Footer */}
        {/* <FooterCon>
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
        </FooterCon> */}
      </GradientBackgroundCon>
    </>
  );
}
