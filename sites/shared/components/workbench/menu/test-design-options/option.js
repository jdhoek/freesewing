import { linkClasses } from 'shared/components/navigation/primary.js'
import { Li, SumButton, SumDiv } from 'shared/components/workbench/menu'
import { useTranslation } from 'next-i18next'

const Option = props => {
  const { t } = useTranslation([`o_${props.design.config.data.name}`, 'workbench'])
  const active = (
    props.sampleSettings?.type === 'option' &&
    props.active === props.option
  )

  const setSampleSettings = () => {
    props.updateGist(
      ['sample'],
      props.sampleSettings,
      true // Close navigation on mobile
    )
  }

  return (
    <Li>
      <SumButton onClick={setSampleSettings}>
        <SumDiv active={active}>
          <span className={`
            text-3xl inline-block p-0 leading-3 px-2
            ${active
              ? 'text-secondary sm:text-secondary-focus translate-y-1 font-bold'
              : 'translate-y-3'
            }`}
          >
            {active ? <span>&bull;</span> : <span>&deg;</span>}
          </span>
          <span className={active ? 'text-secondary font-bold' : ''}>
            {props.label}
          </span>
        </SumDiv>
      </SumButton>
    </Li>
  )
}

export default Option
