import React from "react";

import logo from "../image/logo.webp";

const ContributorsPage = () => {
  return (
    <div className="container-center">
      <div className="credit-div">
        <img src={logo} className="login-logo" alt="Logo" />
        <h1>Contributeurs</h1>

        <div className="container-center">
          <table>
            <tbody>
              <tr>
                <td>
                  <img
                    src="https://avatars.githubusercontent.com/u/105978556"
                    className="pdp"
                    alt="Thomas Ribalta"
                  />
                </td>
                <td>
                  <a
                    className="nom-contrib"
                    href="https://github.com/ThomasRibalta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ThomasRibalta
                  </a>
                </td>
                <td>
                  <div className="tooltip">
                    <div
                      className="like-github"
                      style={{ backgroundColor: "green" }}
                    ></div>
                    <span>20 contributions</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.githubusercontent.com/u/130067625"
                    className="pdp"
                    alt="Jordan05072005"
                  />
                </td>
                <td>
                  <a
                    className="nom-contrib"
                    href="https://github.com/Jordan05072005"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jordan05072005
                  </a>
                </td>
                <td>
                  <div className="tooltip">
                    <div
                      className="like-github"
                      style={{ backgroundColor: "green" }}
                    ></div>
                    <span>20 contributions</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.githubusercontent.com/u/190750749"
                    className="pdp"
                    alt="Rom1aim"
                  />
                </td>
                <td>
                  <a
                    className="nom-contrib"
                    href="https://github.com/Rom1aim"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Rom1aim
                  </a>
                </td>
                <td>
                  <div className="tooltip">
                    <div
                      className="like-github"
                      style={{ backgroundColor: "green" }}
                    ></div>
                    <span>20 contributions</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="https://avatars.githubusercontent.com/u/96547722"
                    className="pdp"
                    alt="D3STROYEUR"
                  />
                </td>
                <td>
                  <a
                    className="nom-contrib"
                    href="https://github.com/D3STROYEUR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    D3STROYEUR
                  </a>
                </td>
                <td>
                  <div className="tooltip">
                    <div
                      className="like-github"
                      style={{ backgroundColor: "green" }}
                    ></div>
                    <span>20 contributions</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Crédits */}
        <h2>Crédits</h2>
        <div className="container-center">
          <div>
            <p>Images : Bing Copilot</p>
            <p>
              Icône :{" "}
              <a
                className="black-font"
                href="https://fontawesome.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                FontAwesome
              </a>
            </p>
            <p>Technologies : React, Nest, GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributorsPage;
