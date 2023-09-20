// import React from 'react';
// import{useParams} from "react-router-dom"
// import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
// const Room =()=> {
//     const {roomId}=useParams();
//     const MyMeeting=async (element)=>{
//         const appID =2064026497 ;
//         const serverSecret = "a03567d6a66c61464be96c13cfd44b06";
//         const Kittoken=generateKitTokenForTest(appID,serverSecret,roomId, Date.now(),"Mohammad Ibrahim" );
//         const zc=ZegoUIKitPrebuilt.create(Kittoken);
//         zc.joinRoom({
//             container:element,
//             sharedLinks: [
//                 {
//                     name: 'Copy link',
//                     url:`http//:localhost:3000/room/${roomId}`

//                 },
//             ],
//             scenario:{
//                 mode:ZegoUIKitPrebuilt.OneONoneCall
//             },
//             showScreenSharingButton: false,
//         });
//     }
//     return (
//         <>
//             <div>
//               <div ref={MyMeeting}/>

//             </div>
//         </>
//     );
// };
// export default Room;