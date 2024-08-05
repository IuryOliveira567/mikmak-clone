function SlideLeftBtn(previous: any) {
  return (
    <div className="arrows left-arrow">
      <button onClick={() => previous.onClick()} className="left btn text-white"><i className="fa-solid fa-chevron-left"></i></button>
    </div>
  )
}

export default SlideLeftBtn;