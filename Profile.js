import React from "react";

const Profile=()=>
{

    const mystyle = {
        color: "white",
        backgroundColor: "white",
        padding: "70px",
        border:"1px",
        height:"140px",
        borderRadius:"150px",
        width:"140px"
      };

      const fonts={

        fontFamily:"Cascadia Code ExtraLight"
      };
      
    return(

        <>
        
<p style={{fontFamily:"Cascadia Code ExtraLight"}}>Home / Faculty / Assistant Prolessor / Anjali Mehta</p>

<div className='flex1'>
<div><img src="../images/download.jpg" style={mystyle}/></div>
  <div style={{marginLeft:"30px"}}><br/><br/>
<h1 style={{fontSize:"22px",fontFamily:"Cascadia Code ExtraLight"}}>Anjali Mehta</h1>
<p style={{fontSize:"16px"}}>Assistant Professor</p>
<table cellPadding={"10px"}>

  <tr style={fonts}>
    <td>Department</td>
 <td>Papers</td>
 <td>Grade</td>
 <td>Education</td>
 </tr>

 <tr style={fonts}>
    <td><b>CSE</b> </td>
 <td><b>56</b> </td>
 <td><b>Btech</b> </td>		 
 <td><b>IIT Mumbai</b> </td>
 </tr>
</table>

</div>
</div>


        </>
    );
}

export default Profile;