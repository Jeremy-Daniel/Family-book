var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/5NT3FQGC/E9-F3-F2-CD-95-B5-426-C-AF31-ED71235-EA425-1-105-c.jpg", "https://i.postimg.cc/s269sBpx/E69-A5-EE2-3074-4-D98-AED5-6-FD4-FDE64-C3-C-1-105-c.jpg" , "https://i.postimg.cc/s269sBpx/E69-A5-EE2-3074-4-D98-AED5-6-FD4-FDE64-C3-C-1-105-c.jpg", "https://i.postimg.cc/5NT3FQGC/E9-F3-F2-CD-95-B5-426-C-AF31-ED71235-EA425-1-105-c.jpg", "https://i.postimg.cc/Jhf3Gf2C/929453-A9-135-F-482-D-B1-A4-5-D2-DBAA82680-1-105-c.jpg"];
var names = ["Family Book","Sathish", "Roxy", "Jeremy", "Zach", "Abby"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
