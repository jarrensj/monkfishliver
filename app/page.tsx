import { PathSwitcher } from "./path-switcher";

export default function Home() {
  return (
    <div className="vbg-shell">
      <a className="vbg-skip-link" href="#main">
        Skip to content
      </a>
      <header className="vbg-header">
        <div className="vbg-masthead">
          <PathSwitcher current="/" />
        </div>
      </header>
      <main id="main" className="vbg-custom-page" tabIndex={-1}>
        <section className="vbg-custom-opening" aria-labelledby="candidate-title">
          <div className="vbg-custom-group">
            <h1 id="candidate-title" className="vbg-display">
              Jarren.
            </h1>
          </div>
          <div className="vbg-custom-context">
            <p className="vbg-lede">
              Jarren San Jose builds complete web products and grows audiences.
              His work spans AI prototyping at Reforge, creator monetization at
              WannaText, and interactive media at Shibuya.
            </p>
            <nav className="vbg-custom-links" aria-label="Jarren’s profiles">
              <a
                href="https://jarrensj.com/"
                target="_blank"
                rel="noreferrer"
              >
                Portfolio
              </a>
              <a
                href="https://github.com/jarrensj"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jarrensanjose/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="vbg-custom-social-link"
                href="https://instagram.com/jarrensj"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </nav>
          </div>
        </section>

        <section aria-labelledby="evidence-title" className="vbg-custom-group">
          <h2 id="evidence-title" className="vbg-heading-24">
            Jarren’s work
          </h2>
          <div className="vbg-custom-evidence">
            <article className="vbg-custom-row" aria-labelledby="reforge-title">
              <div className="vbg-custom-group">
                <h3 id="reforge-title" className="vbg-heading-24">
                  Reforge Build
                </h3>
                <p>Frontend ownership</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren led frontend development for Reforge Build from the
                  initial team through launch. The AI prototyping product brings
                  together design-system capture, variants, and collaboration. He
                  was the first engineer on the team outside of the VP of Engineering.
                </p>
                <div className="vbg-custom-source-line">
                  <a
                    href="https://jarrensj.com/career"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Career history
                  </a>
                  <a
                    href="https://www.reforge.com/blog/ai-prototyping-15-product-skills"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official product launch
                  </a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="wanna-title">
              <div className="vbg-custom-group">
                <h3 id="wanna-title" className="vbg-heading-24">
                  WannaText
                </h3>
                <p>Product, infra, and the hard calls</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren builds and manages WannaText as its sole engineer. The
                  platform connects creators with fans through messaging, paid
                  content, and subscriptions, bringing frontend, backend, and
                  monetization into one product.
                </p>
                <p>
                  When third-party iMessage vendors couldn’t deliver reliably,
                  Jarren went past frontend and product work and built
                  WannaText’s own iMessage infrastructure on a fleet of Mac
                  minis. Shipping a great experience meant owning the whole
                  path, so he did.
                </p>
                <div className="vbg-custom-source-line">
                  <a
                    href="https://www.wannatext.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live product
                  </a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="code-title">
              <div className="vbg-custom-group">
                <h3 id="code-title" className="vbg-heading-24">
                  Open source work
                </h3>
                <p>Merged PRs in production apps</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren has contributed to open source projects including{" "}
                  <a
                    className="vbg-link"
                    href="https://github.com/jarrensj/defillama-app/commits/main/?author=jarrensj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DefiLlama
                  </a>
                  , where his merged PRs to the Next.js app cover table
                  sorting, filter handling, mobile navigation, and accessibility
                  fixes. He has made over 17,000 contributions on{" "}
                  <a
                    className="vbg-link"
                    href="https://github.com/jarrensj"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  in the past year.
                </p>
                <div className="vbg-custom-source-line">
                  <a
                    href="https://github.com/vercel-labs/web-interface-guidelines/pull/13"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Merged Web Interface Guidelines PR
                  </a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="rabbit-title">
              <div className="vbg-custom-group">
                <h3 id="rabbit-title" className="vbg-heading-24">
                  White Rabbit
                </h3>
                <p>Interactive film experience</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren is credited as a developer on White Rabbit, a 2025
                  Webby nominee for Best Community Engagement. The Shibuya
                  project also won a 2025 Emmy for innovation in emerging media
                  programming.
                </p>
                <div className="vbg-custom-source-line">
                  <a
                    href="https://winners.webbyawards.com/2025/ai-immersive-games/immersive-features/best-community-engagement/332291/white-rabbit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Webby credits
                  </a>
                  <a
                    href="https://www.televisionacademy.com/bios/shibuya"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Emmy record
                  </a>
                </div>
              </div>
            </article>
            <article className="vbg-custom-row" aria-labelledby="diagnosis-title">
              <div className="vbg-custom-group">
                <h3 id="diagnosis-title" className="vbg-heading-24">
                  DiagnosisAI
                </h3>
                <p>Founding engineer · Chief Engineer</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren was the founding engineer at DiagnosisAI, a medical AI
                  startup backed by IBM, NVIDIA, and the Boomtown Accelerator,
                  where his official title was Chief Engineer.
                  He built a revenue-generating Alexa skill with 100k monthly
                  users, and the data it produced helped improve DiagnosisAI’s
                  core AI. During COVID he built ineedanote to help people get
                  free physician notes, and it completed 1,000+ evaluations.
                </p>
                <div className="vbg-custom-source-line">
                  <a
                    href="https://www.wsj.com/articles/new-tech-incubators-put-financials-first-1510508396"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wall Street Journal front page
                  </a>
                  <a
                    href="https://www.facebook.com/ineedanote/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ineedanote
                  </a>
                </div>
              </div>
            </article>
            {/* TODO: FoodNest and hackathon row hidden for now; restore when the copy is settled.
            <article className="vbg-custom-row" aria-labelledby="foodnest-title">
              <div className="vbg-custom-group">
                <h3 id="foodnest-title" className="vbg-heading-24">
                  MVP builder (0-1)
                </h3>
                <p>Product Builder</p>
              </div>
              <div className="vbg-custom-group">
                <p>
                  Jarren built the MVP and website for FoodNest, a startup
                  funded by the European Union that turns a photo of your
                  fridge into recipes. The MVP got FoodNest invited to selection
                  days for a food sustainability accelerator in Europe. He has
                  also won numerous hackathons, including an IEEE AI Hackathon,
                  a Google hackathon, an Amazon Alexa hackathon, and more.
                </p>
                <div className="vbg-custom-source-line">
                  <a
                    href="https://jarrensj.com/career"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Career history
                  </a>
                  <a
                    href="https://jarrensj.com/projects"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Awards and projects
                  </a>
                </div>
              </div>
            </article>
            */}
          </div>
        </section>

        <section className="vbg-custom-growth" aria-labelledby="growth-title">
          <div className="vbg-custom-group">
            <h2 id="growth-title" className="vbg-heading-24">
              Jarren builds audiences
            </h2>
            <p>
              He launched a web app for the Solana Mobile community, runs The
              Sushi Geek, and helps grow Chubbicorns.
            </p>
          </div>
          <div className="vbg-custom-growth-evidence">
            <dl className="vbg-custom-metrics">
              <div className="vbg-custom-metric">
                <dt className="vbg-label">Web app for Solana Phone</dt>
                <dd className="vbg-heading-24">100k+ visits</dd>
                <dd>In the app’s first month, and even more Twitter impressions.</dd>
              </div>
              <div className="vbg-custom-metric">
                <dt className="vbg-label">The Sushi Geek</dt>
                <dd className="vbg-heading-24">1.87M impressions / month</dd>
                <dd>Monthly web impressions for his blog.</dd>
              </div>
              <div className="vbg-custom-metric">
                <dt className="vbg-label">
                  <a
                    className="vbg-link"
                    href="https://x.com/chubbicornstm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chubbicorns
                  </a>
                </dt>
                <dd className="vbg-heading-24">11B+ GIPHY impressions</dd>
                <dd>Growth work for the brand’s online presence.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="vbg-custom-growth" aria-labelledby="markets-title">
          <div className="vbg-custom-group">
            <h2 id="markets-title" className="vbg-heading-24">
              Jarren has skin in the game
            </h2>
            <p>
              Jarren actively participates in the markets, where tastes and
              trends get tested with real money. He is Chubbicorns’
              go-to person for all things engineering, and for growth,
              including their growth on GIPHY and Twitter.
            </p>
          </div>
          <div className="vbg-custom-growth-evidence">
            <dl className="vbg-custom-metrics">
              <div className="vbg-custom-metric">
                <dt className="vbg-label">Amazon Lab126</dt>
                <dd className="vbg-heading-24">Ex-FAANG</dd>
                <dd>Worked as a software engineer on Amazon’s consumer devices.</dd>
              </div>
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
                    target="_blank"
                    rel="noreferrer"
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
            </dl>
          </div>
        </section>

        <section className="vbg-custom-screen" aria-labelledby="screen-title">
          <div className="vbg-custom-group">
            <h2 id="screen-title" className="vbg-heading-24">
              Meet Jarren.
            </h2>
            <p>
              Schedule 30 minutes for a walkthrough of the products, engineering
              decisions, and audience-building work that make him a fit for
              your team.
            </p>
            <div>
              <a
                className="vbg-button"
                href="https://www.linkedin.com/in/jarrensanjose/"
                target="_blank"
                rel="noreferrer"
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
              Product ownership: his frontend leadership at Reforge Build and
              sole-engineer execution at WannaText.
            </li>
            <li>
              Product craft: at WannaText he writes the code and makes the
              user experience calls himself with data from creators and
              experimentation, shipping a steady stream of intentional,
              deliberate improvements to the creator and fan experience.
            </li>
            <li>
              Whatever it takes: when iMessage vendors fell short, he moved
              from frontend and product into infrastructure and built the
              iMessage APIs himself so WannaText wouldn’t suffer from a poor
              experience.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
