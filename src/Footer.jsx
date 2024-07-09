import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <div className="footerContainer">
          <div className="firstContainer">
            <div style={{ width: "300px", marginRight: "184px" }}>
              <h2>Interact</h2>
              <p>
                We are your personal guide for exploring web3 projects &amp;
                earning 100x rewards
              </p>
            </div>
            <div class="footer-content">
              <div class="footer-block">
                <div class="title-small">Intract</div>
                <a class="footer-link " href="/quests">
                  Explore Quests
                </a>
                <a class="footer-link " href="/communities">
                  Comunities
                </a>
                <a class="footer-link " href="/alpha-hub">
                  Alpha Hub
                </a>
              </div>
              <div class="footer-block">
                <div class="title-small">Earn</div>
                <a class="footer-link " href="/referral">
                  Refer &amp; Earn
                </a>
                <a class="footer-link " href="/leaderboard">
                  Leaderboard
                </a>
                <a class="footer-link " href="/achievements">
                  Achievements
                </a>
              </div>
              <div class="footer-block">
                <div class="title-small">About</div>
                <a
                  href="https://docs.intract.io"
                  target="_blank"
                  class="footer-link "
                >
                  Product Roadmap
                </a>
                <a
                  href="https://docs.intract.io/for-project/affiliate-+-sign-up-usd500-bonus"
                  target="_blank"
                  class="footer-link "
                >
                  Affiliate Program
                </a>
                <a
                  href="https://docs.intract.io/for-business/sign-up-program"
                  target="_blank"
                  class="footer-link "
                >
                  Sign up Program
                </a>
                <a
                  href="https://forms.gle/tdjCuL1HJ1EzhQpq8"
                  target="_blank"
                  class="footer-link "
                >
                  Growth Community
                </a>
                <a class="footer-link " href="/blogs">
                  Blogs
                </a>
              </div>
              <div class="footer-block">
                <div class="title-small">Support</div>
                <a
                  href="https://intract-io.notion.site/Intract-Quests-Campaigns-FAQ-6ac66e1a71374f0b9d1f90fe92c7928f?pvs=4"
                  target="_blank"
                  class="footer-link "
                >
                  Help Center
                </a>
                <a
                  href="https://app.intract.io"
                  target="_blank"
                  class="footer-link "
                >
                  Create your quest
                </a>
                <a
                  href="https://intract.gitbook.io/website-policies/intract-terms-of-use"
                  target="_blank"
                  class="footer-link "
                >
                  Terms of Service
                </a>
                <a
                  href="https://intract.gitbook.io/website-policies/intract-privacy-policy"
                  target="_blank"
                  class="footer-link "
                >
                  Privacy Policy
                </a>
                <a
                  href="https://intract.gitbook.io/website-policies/intract-community-guidelines"
                  target="_blank"
                  class="footer-link "
                >
                  Community Guidelines
                </a>
              </div>
            </div>
          </div>
          <div class="footer-divider">
            <p>
              <span class="text-white">Disclaimer: </span>
              Crypto Products, Virtual Digital Assets, and NFTs are unregulated
              and can be highly risky. There may be no regulatory recourse for
              any loss from such transactions. We advise the viewer to proceed
              with caution. Nothing in this website or any communication
              published by us amounts to, is intended to be, or should be
              construed as investment or purchase advice of any kind or
              financial advice or promotion under any applicable laws. Any
              decision made based on the content provided on this website or any
              communication published by us shall not be attributable to us.
            </p>
          </div>
          <div class="footer-divider">
            <div class="footer-copyright-holder">
              <div class="footer-copyright-center">
                Created by{" "}
                <a
                  href="https://app.intract.io"
                  target="_blank"
                  class="white-link"
                >
                  Intract
                </a>
              </div>
            </div>
            <div class="footer-copyright-holder">
              <div class="footer-copyright-center">
                <div class="text-center ">
                  <div class="d-flex align-items-center justify-content-center">
                    <div class="bg-dark rounded pointer mx-2 p-2 fs-5">
                      <i class="bi-twitter text-primary"></i>
                    </div>
                    <div class="bg-dark rounded pointer mx-2 p-2 fs-5">
                      <i class="bi-discord text-info"></i>
                    </div>
                    <div class="bg-dark rounded pointer mx-2 p-2 fs-5">
                      <i class="bi-telegram text-primary"></i>
                    </div>
                    <div class="bg-dark rounded pointer mx-2 p-2 fs-5">
                      <i class="bi-spotify text-success"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
