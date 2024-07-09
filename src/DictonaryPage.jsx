import "./DictionaryPage.css";
const DictionaryPage = () => {
  return (
    <>
      <div className="wrapper">
        <div className="containerDc">
          <div className="text">
            <div class="_alpha_hub_center_heading_main_etypm_47">
              Crypto Dictionary
            </div>
            <div class="_alpha_hub_center_heading_sub_etypm_52">
              Your one-stop to catch up on all crypto terms
            </div>
          </div>
          <div className="imgBig">
            <img
              src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"
              alt=""
            />
            <div className="belowText">
              <div className="textB">
                <div class="_alpha_hub_bottom_heading_main_etypm_105">
                  Web3 + Degen Glossary
                </div>
                <div class="_alpha_hub_bottom_heading_sub_etypm_112">
                  Your own crypto dictionary
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tabSwitcher">
        <div className="ess">
          <a>Essentials</a>
          <a>Alpha Hub</a>
        </div>
      </div>
    </>
  );
};

export default DictionaryPage;
