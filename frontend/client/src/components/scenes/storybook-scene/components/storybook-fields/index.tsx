import * as React from 'react'
import css from './index.module.scss'
import cssCommon from '../../styles/common.module.scss'
import Input from '../../../../ui/textfields/components/input'
import Textarea from '../../../../ui/textfields/components/textarea'
import InputPassword from '../../../../ui/textfields/components/input-password'

interface IProps {

}

const StorybookFields = (props: IProps) => {
    const [defaultValue, setDefaultValue] = React.useState('')

    const handleChangeDefaultValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDefaultValue(event.target.value)
    }, [])

    const [autofocusValue, setAutofocusValue] = React.useState('')

    const handleChangeAutofocusValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setAutofocusValue(event.target.value)
    }, [])

    const [disabledValue, setDisabledValue] = React.useState('999+')

    const handleChangeDisabledValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setDisabledValue(event.target.value)
    }, [])

    const [errorValue, setErrorValue] = React.useState('')

    const handleChangeErrorValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setErrorValue(event.target.value)
    }, [])

    const [successValue, setSuccessValue] = React.useState('Jhon')

    const handleChangeSuccessValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSuccessValue(event.target.value)
    }, [])

    const [passwordValue, setPasswordValue] = React.useState('')

    const handlePasswordValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value)
    }, [])

    const [valueForTextarea, setValueForTextarea] = React.useState('Anything')

    const handleChangeValueForTextarea = React.useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValueForTextarea(event.target.value)
    }, [])

    return (
        <div className={cssCommon.content}>
            <div className={cssCommon.subtitle}>Inputs:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Input label={'Default'}
                           value={defaultValue}
                           onReset={() => {setDefaultValue('')}}
                           onChange={handleChangeDefaultValue}/>
                </div>

                <div className={css.item}>
                    <Input label={'Disabled'}
                           value={disabledValue}
                           onChange={handleChangeDisabledValue}
                           disabled/>
                </div>

                <div className={css.item}>
                    <Input label={'Error'}
                           value={errorValue}
                           onChange={handleChangeErrorValue}
                           error={React.useMemo(() => [true, ['Test error message']], [])}/>
                </div>

                <div className={css.item}>
                    <Input label={'Success'}
                           value={successValue}
                           onChange={handleChangeSuccessValue}
                           success={React.useMemo(() => [true, ['Test success message']], [])}/>
                </div>

                <div className={css.item}>
                    <Input label={'Autofocus'}
                           value={autofocusValue}
                           onReset={() => {setAutofocusValue('')}}
                           onChange={handleChangeAutofocusValue}
                           autofocus/>
                </div>

                <div className={css.item}>
                    <InputPassword label={'Password'}
                           value={passwordValue}
                           onReset={() => {setPasswordValue('')}}
                           onChange={handlePasswordValue}/>
                </div>
            </div>

            <div className={cssCommon.subtitle}>Textareas:</div>

            <div className={css.list}>
                <div className={css.item}>
                    <Textarea label={'Default'}
                              value={valueForTextarea}
                              onChange={handleChangeValueForTextarea}/>
                </div>

                <div className={css.item}>
                    <Textarea label={'Disabled'}
                              disabled
                              value={valueForTextarea}
                              onChange={handleChangeValueForTextarea}/>
                </div>

                <div className={css.item}>
                    <Textarea label={'Error'}
                              value={valueForTextarea}
                              rows={10}
                              onChange={handleChangeValueForTextarea}
                              error={React.useMemo(() => [true, ['Test error message']], [])}/>
                </div>

                <div className={css.item}>
                    <Textarea label={'Success'}
                           value={valueForTextarea}
                           onChange={handleChangeValueForTextarea}
                           success={React.useMemo(() => [true, ['Test success message']], [])}/>
                </div>
            </div>
        </div>
    )
}

export default StorybookFields
