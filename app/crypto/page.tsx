import type { Metadata } from "next";
import Link from "next/link";
import { ProfileToggle } from "../profile-toggle";

export const metadata: Metadata = {
  title: "Jarren San Jose · Crypto",
  description:
    "Jarren San Jose is CTO of Chubbicorns, audits smart contracts, and trades on his own time, with a top 200 OpenSea wallet and the #1 clan in FOMO’s first week of clans.",
  alternates: { canonical: "/crypto" },
};

export default function Crypto() {
  return (
    <div className="vbg-shell">
      <a className="vbg-skip-link" href="#main">
        Skip to content
      </a>
      <header className="vbg-header">
        <div className="vbg-masthead">
          <span className="vbg-identity">
            <span className="vbg-mono vbg-heading-24">~/jarren/crypto</span>
          </span>
          <ProfileToggle current="/crypto" />
        </div>
      </header>
      <main id="main" className="vbg-custom-page" tabIndex={-1}>
        <section className="vbg-custom-opening" aria-labelledby="crypto-title">
          <div className="vbg-custom-group">
            <h1 id="crypto-title" className="vbg-display">
              Jarren is crypto native.
            </h1>
          </div>
          <div className="vbg-custom-context">
            <p className="vbg-lede">
              kwaji is CTO of Chubbicorns, audits smart contracts, and trades
              the markets on his own time. He was the smart contract engineer
              and built the MVP for Shibuya, and contributed to DefiLlama.
            </p>
            <nav className="vbg-custom-links" aria-label="Jarren’s profiles">
              <Link href="/">Design profile</Link>
              <a href="https://jarrensj.com/">Portfolio</a>
              <a href="https://github.com/jarrensj">GitHub</a>
              <a href="https://www.linkedin.com/in/jarrensanjose/">LinkedIn</a>
            </nav>
          </div>
        </section>

        <section aria-labelledby="crypto-work-title" className="vbg-custom-group">
          <h2 id="crypto-work-title" className="vbg-heading-24">
            Jarren’s crypto work
          </h2>
          <div className="vbg-custom-evidence">
            <article className="vbg-custom-row" aria-labelledby="chubbicorns-title">
              <div className="vbg-custom-group">
                <h3 id="chubbicorns-title" className="vbg-heading-24">
                  Chubbicorns
                </h3>
                <p>CTO</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren built the sales bot for Chubbicorns’ original team.
                  When the original artists formed a new team, he joined them
                  as CTO and facilitated and managed the transition of the
                  project’s smart contracts.
                </p>
                <p>
                  He is still Chubbicorns’ go-to person for engineering and
                  growth, including its 11B+ impressions on GIPHY.
                </p>
                <div className="vbg-custom-source-line">
                  <a href="https://x.com/chubbicornstm">Chubbicorns on X</a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="wannatext-title">
              <div className="vbg-custom-group">
                <h3 id="wannatext-title" className="vbg-heading-24">
                  WannaText
                </h3>
                <p>Crypto payment rails</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren added crypto payment rails to WannaText, the creator
                  monetization platform he builds and runs as its sole
                  engineer.
                </p>
                <div className="vbg-custom-source-line">
                  <a href="https://www.wannatext.com/">Live product</a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="walrus-title">
              <div className="vbg-custom-group">
                <h3 id="walrus-title" className="vbg-heading-24">
                  Walrus Photo Booth
                </h3>
                <p>Built for the Sui Foundation</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren built Walrus Photo Booth for the Sui Foundation on
                  Walrus, the decentralized storage network on Sui. It debuted
                  at one of the Sui Foundation’s official events at ETHDenver
                  2025.
                </p>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="audits-title">
              <div className="vbg-custom-group">
                <h3 id="audits-title" className="vbg-heading-24">
                  Smart contract audits
                </h3>
                <p>Security review</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren has audited smart contracts for projects including{" "}
                  <a className="vbg-link" href="https://247comics.com/">
                    24/7 Comics
                  </a>{" "}
                  and The Ninja Kingdom by Kyosei.
                </p>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="launches-title">
              <div className="vbg-custom-group">
                <h3 id="launches-title" className="vbg-heading-24">
                  NFT launches
                </h3>
                <p>Instant mint-outs</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren helped music entertainment company{" "}
                  <a
                    className="vbg-link"
                    href="https://www.calistarentertainment.com/"
                  >
                    CaliStar
                  </a>{" "}
                  launch its NFTs, which minted out instantly. Weaxels, another
                  launch he helped with, also minted out instantly on Base L2.
                </p>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="friends-title">
              <div className="vbg-custom-group">
                <h3 id="friends-title" className="vbg-heading-24">
                  Projects with friends
                </h3>
                <p>NFT Wiki and Goblin Translator</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren and John built{" "}
                  <a
                    className="vbg-link"
                    href="https://x.com/JohnPhamous/status/1478828824976449536"
                  >
                    NFT Wiki
                  </a>
                  , where people can create custom landing pages. They also
                  created{" "}
                  <a
                    className="vbg-link"
                    href="https://x.com/JohnPhamous/status/1531754866715963393"
                  >
                    Goblin Translator
                  </a>
                  .
                </p>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="websites-title">
              <div className="vbg-custom-group">
                <h3 id="websites-title" className="vbg-heading-24">
                  Client websites
                </h3>
                <p>SO-COL and Jebus</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  SO-COL (IreneDAO) hired Jarren to build out its website. He
                  also built a dive bar concept landing page for{" "}
                  <a className="vbg-link" href="https://x.com/Jebus">
                    Jebus
                  </a>
                  ’s meme.
                </p>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="shibuya-title">
              <div className="vbg-custom-group">
                <h3 id="shibuya-title" className="vbg-heading-24">
                  Shibuya
                </h3>
                <p>Smart contract engineer</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren was Shibuya’s smart contract engineer and led the
                  team, including two engineers, to Shibuya’s April 2025 MVP
                  launch.
                </p>
                <p>
                  He is also credited as a developer on White Rabbit, a 2025
                  Webby nominee for Best Community Engagement. The Shibuya
                  project also won a 2025 Emmy for innovation in emerging media
                  programming.
                </p>
                <div className="vbg-custom-source-line">
                  <a href="https://winners.webbyawards.com/2025/ai-immersive-games/immersive-features/best-community-engagement/332291/white-rabbit">
                    Webby credits
                  </a>
                  <a href="https://www.televisionacademy.com/bios/shibuya">
                    Emmy record
                  </a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="defillama-title">
              <div className="vbg-custom-group">
                <h3 id="defillama-title" className="vbg-heading-24">
                  DefiLlama
                </h3>
                <p>Open source DeFi analytics</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren’s merged PRs to DefiLlama’s Next.js app cover table
                  sorting, filter handling, mobile navigation, and
                  accessibility fixes.
                </p>
                <div className="vbg-custom-source-line">
                  <a href="https://github.com/jarrensj/defillama-app/commits/main/?author=jarrensj">
                    DefiLlama commits
                  </a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="checkphone-title">
              <div className="vbg-custom-group">
                <h3 id="checkphone-title" className="vbg-heading-24">
                  checkphone
                </h3>
                <p>Solana Mobile community web app</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren launched{" "}
                  <a
                    className="vbg-link"
                    href="https://x.com/0xrwu/status/1744915883674223060"
                  >
                    checkphone
                  </a>
                  , a web app for the Solana Mobile community. It captured 100k
                  views in its first month after launch, and even more Twitter
                  impressions.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="vbg-custom-growth" aria-labelledby="own-time-title">
          <div className="vbg-custom-group">
            <h2 id="own-time-title" className="vbg-heading-24">
              Jarren is onchain off the clock
            </h2>
            <p>
              He’s active in the markets himself, where tastes and trends get
              tested with real money. His onchain activity is ridiculous, and
              so is his{" "}
              <a className="vbg-link" href="https://github.com/jarrensj">
                GitHub
              </a>{" "}
              activity.
            </p>
          </div>
          <div className="vbg-custom-growth-evidence">
            <dl className="vbg-custom-metrics">
              <div className="vbg-custom-metric">
                <dt className="vbg-label">OpenSea</dt>
                <dd className="vbg-heading-24">Top 200 by volume</dd>
                <dd>
                  <em>One of</em> his wallets was top 200 in OpenSea lifetime
                  trading volume.
                </dd>
              </div>
              <div className="vbg-custom-metric">
                <dt className="vbg-label">
                  <a
                    className="vbg-link"
                    href="https://x.com/Chubbicornstm/status/2089556630677619061"
                  >
                    FOMO clans
                  </a>
                </dt>
                <dd className="vbg-heading-24">#1 clan</dd>
                <dd>
                  Chubbicorns was the top clan in the inaugural week of clans
                  on the trading app FOMO.
                </dd>
              </div>
              <div className="vbg-custom-metric">
                <dt className="vbg-label">
                  <a className="vbg-link" href="https://x.com/omakasemoney">
                    Omaka$e
                  </a>
                </dt>
                <dd className="vbg-heading-24">Community</dd>
                <dd>
                  Omaka$e is his own community on Discord and Twitter. He grew
                  it and built trading tools for its members. Never left.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="vbg-custom-screen" aria-labelledby="screen-title">
          <div className="vbg-custom-group">
            <h2 id="screen-title" className="vbg-heading-24">
              Meet Jarren.
            </h2>
            <p>
              Schedule 30 minutes for a walkthrough of the smart contract,
              product, and market work that make him a fit for your crypto
              team.
            </p>
            <div>
              <a
                className="vbg-button"
                href="https://www.linkedin.com/in/jarrensanjose/"
              >
                Connect on LinkedIn
              </a>
            </div>
            <p>
              Or write directly:{" "}
              <a className="vbg-link" href="mailto:sanjose.jarren@gmail.com">
                sanjose.jarren@gmail.com
              </a>
            </p>
          </div>
          <ul className="vbg-custom-questions">
            <li>
              Smart contracts: his work as Shibuya’s smart contract engineer,
              his audits for 24/7 Comics and The Ninja Kingdom, and managing
              Chubbicorns’ contract transition as the new CTO.
            </li>
            <li>
              Shipping crypto products: leading the team to Shibuya’s April
              2025 MVP launch, NFT launches for CaliStar and Weaxels that
              minted out instantly, Chubbicorns’ sales bot, and checkphone, a
              Solana Mobile web app with 100k views in its first month.
            </li>
            <li>
              Market sense: a top 200 OpenSea wallet by lifetime volume and
              the #1 clan in FOMO’s inaugural week of clans.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
