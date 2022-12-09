// Core
import React, {FC, memo} from 'react'
// Ant Components
import {Modal} from 'antd'
// Ant Icon
import {} from '@ant-design/icons'
// Hook
import {useFavoritesEf} from './useFavoritesEf'
import {ComingSoon, Typography} from "elements";


type PropsType = {
    children?: never,
    showFavorites: boolean,
    handlerChangeFavorites: () => void
}

const Favorites: FC<PropsType> = memo(({showFavorites = false, handlerChangeFavorites}) => {
    const {} = useFavoritesEf()

    return <>
        <Modal
            centered
            visible={showFavorites}
            onCancel={handlerChangeFavorites}
            footer={false}
            title={false}
            width={'100%'}
            wrapClassName={'close-account__modal-wrap'}
        >
            <div className={'close-account__header'}>
                <div className="close-account__container close-account__header-container">
                    <Typography type={'text-16'} weight={'medium'} color={'primary'}>Favorites</Typography>
                    <a href={'#'} className={'close-account__header-close'} onClick={handlerChangeFavorites}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.15591 7.99944L15.0153 1.01507C15.1135 0.898996 15.0309 0.722656 14.8791 0.722656H13.0979C12.993 0.722656 12.8925 0.769531 12.8233 0.849888L7.99073 6.61105L3.15814 0.849888C3.09117 0.769531 2.99073 0.722656 2.88358 0.722656H1.10233C0.950549 0.722656 0.867959 0.898996 0.966173 1.01507L6.82555 7.99944L0.966173 14.9838C0.944173 15.0097 0.930058 15.0413 0.925505 15.075C0.920953 15.1086 0.926153 15.1429 0.940489 15.1737C0.954825 15.2045 0.977695 15.2305 1.00638 15.2487C1.03507 15.2669 1.06837 15.2764 1.10233 15.2762H2.88358C2.9885 15.2762 3.08894 15.2294 3.15814 15.149L7.99073 9.38784L12.8233 15.149C12.8903 15.2294 12.9907 15.2762 13.0979 15.2762H14.8791C15.0309 15.2762 15.1135 15.0999 15.0153 14.9838L9.15591 7.99944Z" fill="#332E54"/>
                        </svg>
                    </a>
                </div>
            </div>
            <ComingSoon/>
        </Modal>
    </>
})

export default Favorites
