import React from "react";
import "./Panchnama.css";

const Panchnama = () => {
  return (
    <div>
      <div className="container">
        <div className="page-area">
          <div className="main-page">
            <div className="blue-head">
              <h1>Lx Infrastructure Ltd.</h1>
            </div>
            <div className="second-heading">
              <h4>हैंडपंप संसाधरण का पंचनामा</h4>
              <p>Type .......</p>
            </div>
            
            <div className="heading-details">
              <p>हम ग्रामवासी यह प्रमाणित करते हैं की विकास खंड की</p>

              <div className="form-detail">
                <p>ग्राम पंचायत : ............</p>
                <p>के ग्राम : ...............</p>
              </div>

              <div>
                <p>स्थान : ................</p>
                <p>
                  मोहल्ले के हैंडपंप की आज मरम्मत की गई है, इस हैंडपंप में
                  मरम्मत के दौरान निम्न सामान डाला गया--
                </p>
              </div>

              <div className="form-detail">
                <p>दिनांक : ............</p>
                <p>क्रमांक - ............</p>
              </div>
            </div>

            <div className="content-table">
              <table border={1}>
                <thead>
                  <tr>
                    <th>क्रमांक</th>
                    <th>नाम सामग्री</th>
                    <th>नग</th>
                    <th>सवा इंच के पाइप की जानकारी</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>पाइप चाकू</td>
                    <td>10</td>
                    <td> (अ)</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>स्ट्रॉन्ग सम्पी</td>
                    <td>15</td>
                    <td> (1) पहले से डाले हैं - </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>नाली चाकू</td>
                    <td>20</td>
                    <td> (2) बदले गए - </td>
                  </tr>

                  <tr>
                    <td>4</td>
                    <td>ग्रीस गन</td>
                    <td>105</td>
                    <td> (3) बढ़ाए गए - </td>
                  </tr>

                  <tr>
                    <td>5</td>
                    <td>हैंडपंप स्पैनर</td>
                    <td>105</td>
                    <td> (4) कुल पाइप संख्या नग -  </td>
                  </tr>

                  <tr>
                    <td>6</td>
                    <td>बोर ब्रश</td>
                    <td>105</td>
                    <td>(ब)</td>
                  </tr>

                  <tr>
                    <td>7</td>
                    <td>ओटी चाकू</td>
                    <td>105</td>
                    <td> (1) नल कूप की जल आवक क्षमता - </td>
                  </tr>

                  <tr>
                    <td>8</td>
                    <td>स्पाइडर टूल</td>
                    <td>105</td>
                    <td> (2) जल का स्तर - </td>
                  </tr>

                  <tr>
                    <td>9</td>
                    <td>नाली पंच</td>
                    <td>105</td>
                    <td> (3) प्लेटफार्म की वर्तमान स्तिथि - </td>
                  </tr>

                  <tr>
                    <td>10</td>
                    <td>टाईटनिंग तंतु</td>
                    <td>105</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="footer-info">
              <div className="form-detail">
                <p>ग्राम :</p>
                <p>हस्ताक्षर मैकेनिक :</p>
              </div>
              
              <div className="form-detail">
                <p>स्थान :</p>
                <p>हस्ताक्षर ग्रामवासी :</p>
              </div>
              <div className="form-detail">
                <p></p>
                <p>प्रति हस्ताक्षर उपयंत्री :</p>
              </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panchnama;
