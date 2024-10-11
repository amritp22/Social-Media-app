const cloud_name="dv8jjlg17";
const upload_preset="krmgttmc";

export const uploadToCloudinary=async(pics,fileType)=>{
        const data=new FormData();
        data.append("file",pics);
        data.append("cloud_name",cloud_name);
        data.append("upload_preset",upload_preset);

        //fetching
        if(pics && fileType){
        const res=await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
            {method:'post',body:data});
            console.log(res);

            const fileData=await res.json();
            console.log(fileData.url);
            return fileData.url;
        }else{
            console.log("eroor/......");
            
        }
            

             

}