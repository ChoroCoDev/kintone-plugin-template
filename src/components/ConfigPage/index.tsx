import React from 'react'
import { useEffect, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'

type Props = {
  spaceCd: string
  fieldCd1: string
  fieldCd2?: string
}

type FieldProps = {
  code: string
  label: string
}

export const ConfigPage = (props: Props) => {
  const [fieldList, setFieldList] = useState<FieldProps[]>([])
  const [checked, setChecked] = useState<boolean>(false)
  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Props>({
    defaultValues: props,
  })
  const field1 = useWatch({ name: 'fieldCd1', control: control })
  const onCheck = () => {
    setChecked(prevChecked => !prevChecked)
  }
  const onSubmit = (data: Props) => console.log(data)

  useEffect(() => {
    setFieldList([
      { code: 'fieldA', label: 'フィールドA' },
      { code: 'fieldB', label: 'フィールドB' },
      { code: 'fieldC', label: 'フィールドC' },
      { code: 'fieldD', label: 'フィールドD' },
      { code: 'fieldE', label: 'フィールドE' },
    ])
  }, [])

  return (
    <section className='p-2'>
      <h1 className='text-gray-900 text-xl mb-2'>プラグインタイトル</h1>
      <p className='text-gray-400 text-sm mb-4'>プラグインの説明</p>
      <div className='container p-2'>
        <form action='' className='flex flex-col items-start' onSubmit={handleSubmit(onSubmit)}>
          <table className='table-fixed w-2/3'>
            <tbody className='text-left'>
              <tr className='h-10'>
                <th>
                  <label htmlFor='spaceCd'>対象スペースフィールド</label>
                </th>
                <td>
                  <input
                    className='border w-full'
                    type='text'
                    id='spaceCd'
                    {...register('spaceCd', { required: true })}
                  />
                </td>
                {errors.spaceCd && (
                  <td>
                    <p className='text-red-500 text-sm ml-2'>リンクを設置するスペースは必須項目です</p>
                  </td>
                )}
              </tr>
              <tr className='h-10'>
                <th>
                  <label htmlFor='fieldCd1'>対象フィールド</label>
                </th>
                <td>
                  <select className='border w-full text-lg' id='fieldCd1' {...register('fieldCd1', { required: true })}>
                    <option value=''>-----</option>
                    {fieldList.map(({ code, label }, index) => (
                      <option key={'field-code-1-' + index} value={code}>
                        {label}
                      </option>
                    ))}
                  </select>
                </td>
                {errors.fieldCd1 && (
                  <td>
                    <p className='text-red-500 text-sm ml-2'>電話番号フィールドは必須項目です。</p>
                  </td>
                )}
              </tr>
              <tr className='h-10'>
                <td colSpan={2}>
                  <input type='checkbox' id='is-field-code-2' onChange={onCheck} />
                  <label htmlFor='is-field-code-2'>変更後電話番号フィールドを使用する</label>
                </td>
              </tr>
              {checked ? (
                <tr className='h-10'>
                  <th>変更後フィールド</th>
                  <td>
                    <select className='border w-full text-lg' id='fieldCd2' {...register('fieldCd2')}>
                      <option value=''>-----</option>
                      {fieldList
                        .filter(({ code }) => code != field1)
                        .map(({ code, label }, index) => (
                          <option key={'field-code-2-' + index} value={code}>
                            {label}
                          </option>
                        ))}
                    </select>
                  </td>
                </tr>
              ) : null}
              <tr>
                <td colSpan={2}>
                  <div>
                    <button className='border rounded px-1 py-1 mr-1'>キャンセル</button>
                    <button
                      type='submit'
                      className='bg-blue-500 opacity-80 text-white font-medium rounded px-4 py-1 mt-4'>
                      送信
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </section>
  )
}

export default ConfigPage
