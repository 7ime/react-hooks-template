import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'

interface IProps extends ITextField.InputProps {

}

const Input = (props: IProps) => {
    const {
        clearValue,
        label
    } = props

    const {
        handleFocus,
        handleBlur,
        handleChange,
        isError,
        errorMessage,
        isSuccess,
        successMessage,
        value,
        isFocused,
        nodeEl,
        autofocus,
        classNames
    } = useTextField<HTMLInputElement>(props)

    const handleClearValue = React.useCallback(() => {
        clearValue && clearValue()
    }, [])

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapInput)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <input className={classnames(css.control, css.controlInput)}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       ref={nodeEl}
                       value={value}
                       tabIndex={-1}
                       type={'text'}/>
                {
                    isFocused && clearValue && (
                        <div className={css.triggers}>
                            <div className={classnames(css.trigger, css.triggerClear)} onMouseDown={handleClearValue}/>
                        </div>
                    )
                }
            </div>

            {isSuccess && successMessage && <div className={css.successContainer}>{successMessage}</div>}
            {isError && errorMessage && <div className={css.errorContainer}>{errorMessage}</div>}
        </div>
    )
}

export default React.memo(Input)
