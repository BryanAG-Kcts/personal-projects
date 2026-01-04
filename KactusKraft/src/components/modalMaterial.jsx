import { previewTextures } from '../const/initialState'

export const ModalMaterial = ({ visibleMenuMaterial }) => {
  if (!visibleMenuMaterial) return null
  return (
    <div className='modalTextures'>
      {
        previewTextures.map((texture, index) => {
          return (
            <span key={texture.name} className='modalImgContainer'>
              <img src={texture.src} alt={texture.name} />
              <p>{index + 1}</p>
            </span>
          )
        })
      }
    </div>
  )
}
