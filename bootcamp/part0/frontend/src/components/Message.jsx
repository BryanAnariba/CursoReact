export const Message = ({ msg, style = {} }) => {
  return (
    <strong style={ style }>
        { msg }
    </strong>
  )
}
