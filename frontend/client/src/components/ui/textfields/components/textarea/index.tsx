import * as React from 'react'
import classnames from 'classnames'
import {ITextField} from '../../model'
import css from '../../styles/textfield.module.scss'
import {useTextField} from '../../hooks/use-textfield'
import MessageValidationContainer from '../../../../common/message-validation-container'

interface IProps extends ITextField.TextareaProps {

}

const Textarea = (props: IProps) => {
    const {
        label,
        rows = 5
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
    } = useTextField<HTMLTextAreaElement>(props)

    return (
        <div className={classNames}>
            <label className={css.label}>{label}</label>
            <div className={classnames(css.controlWrap, css.controlWrapTextArea)}
                 onFocus={handleFocus}
                 onBlur={handleBlur}
                 tabIndex={0}>
                <textarea className={classnames(css.control, css.controlTextarea, 'scrollbar')}
                       onChange={handleChange}
                       autoFocus={autofocus}
                       rows={rows}
                       tabIndex={-1}
                       ref={nodeEl}
                       value={value}/>
            </div>

            {isSuccess && successMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            mods={['success']}
                                            messageList={successMessage}/>
            )}
            {isError && errorMessage && (
                <MessageValidationContainer parentClass={css.messageContainer}
                                            mods={['error']}
                                            messageList={errorMessage}/>
            )}
        </div>
    )
}

export default React.memo(Textarea)
