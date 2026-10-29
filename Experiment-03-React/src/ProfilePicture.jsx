function ProfilePicture(){
  const image = "./src/assets/hero.png"
  const handleClick = (e) => {  e.target.style.display = "none"   }
  return(<img onClick={(e) => handleClick(e)} src={image}></img>)
}
export default ProfilePicture