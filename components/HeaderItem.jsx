function HeaderItem({ title }) {
  return (
    <div className="cursor-pointer hover:animate-bounce">
        <p className="tracking-widest">{ title }</p> 
    </div>
  )
}

export default HeaderItem