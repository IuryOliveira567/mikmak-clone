function SlideRightBt(next: any) {
  return (
    <div className="arrows right-arrow">
      <button onClick={() => next.onClick()} className="btn text-white"><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  )
}

export default SlideRightBt;