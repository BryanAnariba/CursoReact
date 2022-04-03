export const Alert = ({ styles, svg, msg='' }) => {
  return (
    <>
        <div className={styles} role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlinkHref={ svg }/></svg>
            <div>
                { msg }
            </div>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </>
  )
}
