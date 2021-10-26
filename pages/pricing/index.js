// import Layout from "../../components/layout";
// import { Divider, message, Input, Card } from "antd";
// const Pricing = () => {
//   const priceList = [
//     {
//       type: "Enterprise",
//       price: 3950000,
//       optionalLogo: 3,
//       workDay: 21,
//       mockup: 18,
//       unlimitedRevision: true,
//       superGraphic: true,
//       branGuideLine: ["Color Guide", "Typeface Guide", "Photography"],
//       brandIdentity: [
//         {
//           stationery: 8,
//           merchandise: 6,
//           packaging: 3,
//         },
//       ],
//       design: [
//         {
//           banner: 3,
//           billboard: 3,
//           poster: 3,
//           sosialMediaDesign: 12,
//         },
//       ],
//       bonus: [
//         "Cetak 1 Pack Kartu Nama",
//         "Cetak Banner Max. 5X1 M",
//         "Y/X Banner",
//         "Satu Kaos dengan desain Logo",
//       ],
//     },
//   ];

//   return (
//     <Layout>
//       <div className="container-pricing">
//         <Divider
//           style={{
//             fontSize: "20px",
//             marginTop: "15px",
//             marginBottom: "40px",
//           }}
//           orientation="left"
//         >
//           Pricing
//         </Divider>
//       </div>
//       <div class="conten-pricing">
//         {priceList.map((e) => {
//           return (
//             <div class={`pricing-table ${e.type}`}>
//               <div class="pricing-header">
//                 <div class="price">
//                   <span>IDR</span>
//                   {e.price
//                     .toString()
//                     .split("")
//                     .reverse()
//                     .join("")
//                     .match(/\d{1,3}/g)
//                     .join(".")
//                     .split("")
//                     .reverse()
//                     .join("")}
//                 </div>
//                 <div class="title">{e.type}</div>
//               </div>
//               <ul class="pricing-list">
//                 <li>
//                   <strong>{e.optionalLogo}</strong> Optional Logo
//                 </li>
//                 <div class="border"></div>
//                 <li>
//                   <strong>{e.workDay}</strong> Day of Work
//                 </li>
//                 <div class="border"></div>
//                 <li>
//                   <strong>{e.mockup}</strong> Mockup Preview
//                 </li>
//                 <div class="border"></div>
//                 <li>Unlimited Revision</li>
//                 <li>Super Graphic</li>
//                 <li>
//                   <strong>Brand Guideline</strong>
//                 </li>
//                 <li>- {e.branGuideLine[2]}</li>
//               </ul>
//               <a href="#">Order Now</a>
//             </div>
//           );
//         })}
//       </div>
//     </Layout>
//   );
// };

// export default Pricing;
