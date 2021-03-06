/**
 * This is a Pabau Appointment
 */

import React, { FC } from 'react'
import { Row, Col, Divider } from 'antd'
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import { Button } from '@pabau/ui'
import styles from './Appointment.module.less'
import { ReactComponent as NormalClinicLogo } from '../../assets/images/normal-clinic-logo.svg'
import { ReactComponent as Calendar } from '../../assets/images/calendar.svg'

import ENSVG from '../../assets/images/lang-logos/en.svg'
import FRSVG from '../../assets/images/lang-logos/french.svg'
import SPSVG from '../../assets/images/lang-logos/spanish.svg'
import ARSVG from '../../assets/images/lang-logos/arabic.svg'
import BGSVG from '../../assets/images/lang-logos/bulgarian.svg'
import CSSVG from '../../assets/images/lang-logos/czech.svg'
import HUSVG from '../../assets/images/lang-logos/hungarian.svg'
import LVSVG from '../../assets/images/lang-logos/latvian.svg'
import NOSVG from '../../assets/images/lang-logos/norwegian.svg'
import PLSVG from '../../assets/images/lang-logos/polish.svg'
import SWSVG from '../../assets/images/lang-logos/swedish.svg'
import ROSVG from '../../assets/images/lang-logos/romanian.svg'
import RUSVG from '../../assets/images/lang-logos/russian.svg'
import DASVG from '../../assets/images/lang-logos/dutch.svg'

interface LangData {
  [key: string]: Email
}

interface Email {
  greeting: string
  detail: string
  date: string
  reschedule: string
  service: string
  employee: string
  title: string
  address: string
  cancelButton: string
  confirmButton: string
  policy: string
  cancelPolicy: string
  complete: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi Kristy, see you soon!',
    detail: 'Appointment details:',
    date: 'Monday, 16 November at 11:00',
    reschedule: 'Reschedule',
    service: 'Consultation (30 mins)',
    employee: ' with John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Cancel appointment',
    confirmButton: 'Confirm appointment',
    policy: '*Please, avoid cancelling within 48 hours notice',
    cancelPolicy: 'Cancellation policy',
    complete: 'Complete Medical History',
  },
  sp: {
    greeting: 'Hola Kristy, ??hasta pronto!',
    detail: 'Detalles de la cita:',
    date: 'Lunes 16 de noviembre a las 11:00',
    reschedule: 'Reprogramar',
    service: 'Consulta (30 minutos)',
    employee: ' con John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Inglaterra, GB',
    cancelButton: 'Cancelar cita',
    confirmButton: 'Confirmar cita',
    policy: '* Por favor, evite cancelar con 48 horas de anticipaci??n',
    cancelPolicy: 'Pol??tica de cancelaci??n',
    complete: 'Complete Medical History',
  },
  fr: {
    greeting: 'Salut Kristy, ?? bient??t!',
    detail: 'D??tails du rendez-vous:',
    date: 'Lundi 16 novembre ?? 11:00',
    reschedule: 'Replanifier',
    service: 'Consultation (30 min)',
    employee: ' avec John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Annuler rendez-vous',
    confirmButton: 'Confirmer le rendez-vous',
    policy: '* Veuillez ??viter dannuler dans les 48 heures davis',
    cancelPolicy: 'Politique dannulation',
    complete: 'Histoire m??dicale compl??te',
  },
  ru: {
    greeting: '????????????, ????????????, ???? ???????????? ??????????????!',
    detail: '???????????????? ?? ??????????????:',
    date: '??????????????????????, 16 ???????????? ?? 11:00',
    reschedule: '?????????????????? ????????????',
    service: '???????????????????????? (30 ??????????)',
    employee: ' ?? ???????????? ????????????',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: '???????????????? ??????????????',
    confirmButton: '?????????????????????? ??????????????',
    policy: '* ????????????????????, ?????????????????? ???????????? ?? ?????????????? 48 ??????????.',
    cancelPolicy: '???????????????? ????????????',
    complete: '???????????? ?????????????????????? ??????????????',
  },
  ar: {
    greeting: '???????????? ???????????? ?? ???????? ????????????!',
    detail: '???????????? ????????????:',
    date: '?????????????? 16 ???????????? ???????????? 11:00',
    reschedule: '?????????? ??????????????',
    service: '?????????????? (30 ??????????)',
    employee: ' ???? ?????? ????????',
    title: 'M-A ???????????? ?????????? ????????',
    address: '574 ???????? ???????????? ?? H3454 ?? ?????????????? ?? GB',
    cancelButton: '?????????? ??????????????',
    confirmButton: '?????????? ????????????',
    policy: '* ???? ???????? ?? ???????? ?????????????? ???????? 48 ???????? ???? ??????????????',
    cancelPolicy: '?????????? ??????????????',
    complete: '?????????????? ?????????? ????????????',
  },
  bg: {
    greeting: '??????????????, ????????????, ???? ??????????!',
    detail: '?????????????????????? ???? ??????????????????????????:',
    date: '????????????????????, 16 ?????????????? ???? 11:00',
    reschedule: '??????????????????????',
    service: '?????????????????????? (30 ????????????)',
    employee: ' ?? ???????? ????????',
    title: 'M-A ?????????????????????? ?? ??????',
    address: '574 Beferly Road, H3454, ????????????, ????????????????????????????',
    cancelButton: '???????????? ???? ??????????',
    confirmButton: '???????????????????? ??????????????',
    policy: '* ????????, ???????????????????? ?????????????????? ?? ?????????????? ???? 48 ???????? ????????????????????????',
    cancelPolicy: '???????????????? ???? ??????????????????',
    complete: '?????????? ???????????????????? ??????????????',
  },

  cs: {
    greeting: 'Ahoj Kristy, uvid??me se brzy!',
    detail: 'Podrobnosti o sch??zce:',
    date: 'Pond??l?? 16. listopadu v 11:00',
    reschedule: 'P??epl??novat',
    service: 'Konzultace (30 minut)',
    employee: ' s Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Zru??it sch??zku',
    confirmButton: 'Potvr??te sch??zku',
    policy: '* Pros??m, vyhn??te se zru??en?? do 48 hodin od ozn??men??',
    cancelPolicy: 'Storno podm??nky',
    complete: 'Kompletn?? anamn??za',
  },

  da: {
    greeting: 'Hej Kristy, vi ses snart!',
    detail: 'Udn??vnelsesoplysninger:',
    date: 'Mandag 16. november kl. 11:00',
    reschedule: 'Planl??g om',
    service: 'Konsultation (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Annuller aftale',
    confirmButton: 'Bekr??ft aftale',
    policy: '* Undg?? at annullere inden for 48 timers varsel',
    cancelPolicy: 'Afbestillingspolitik',
    complete: 'Komplet medicinsk historie',
  },
  hu: {
    greeting: 'Szia Kristy, hamarosan tal??lkozunk!',
    detail: 'Kinevez??s r??szletei:',
    date: 'November 16., h??tf??, 11:00',
    reschedule: '??t??temez??s',
    service: 'Konzult??ci?? (30 perc)',
    employee: ' John Smith-szel',
    title: 'M-A hajviselet ??s f??rd??',
    address: '574 Beferly Road, H3454, Anglia, GB',
    cancelButton: 'A tal??lkoz?? lemond??sa',
    confirmButton: 'Er??s??tse meg a kinevez??st',
    policy: '* K??rj??k, ker??lje a lemond??st 48 ??r??n bel??l',
    cancelPolicy: 'Lemond??si felt??telek',
    complete: 'Teljes k??rt??rt??net',
  },
  lv: {
    greeting: 'Sveika Kristij, tiekamies dr??z!',
    detail: 'Inform??cija par iecel??anu amat??:',
    date: 'Pirmdien, 16. novembr??, pulksten 11:00',
    reschedule: 'P??rpl??nojiet',
    service: 'Konsult??cijas (30 min)',
    employee: ' ar D??onu Smitu',
    title: 'M-A matu apstr??de un spa',
    address: '574 Beferly Road, H3454, Anglija, GB',
    cancelButton: 'Atcelt tik??anos',
    confirmButton: 'Apstipriniet iecel??anu',
    policy: '* L??dzu, izvairieties no atcel??anas 48 stundu iepriek??',
    cancelPolicy: 'Anul????anas politika',
    complete: 'Piln??ga medic??nisk?? v??sture',
  },
  no: {
    greeting: 'Hei Kristy, vi sees snart!',
    detail: 'Avtaledetaljer:',
    date: 'Mandag 16. november kl 11:00',
    reschedule: 'Planlegge p?? nytt',
    service: 'Konsultasjon (30 minutter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Avbryt avtalen',
    confirmButton: 'Bekreft avtale',
    policy: '* Vennligst unng?? kansellering innen 48 timers varsel',
    cancelPolicy: 'Avbestillingsregler',
    complete: 'Komplett medisinsk historie',
  },
  pl: {
    greeting: 'Cze???? Kristy, do zobaczenia wkr??tce!',
    detail: 'Szczeg????y wizyty:',
    date: 'Poniedzia??ek, 16 listopada o godzinie 11:00',
    reschedule: 'Prze??????',
    service: 'Konsultacja (30 min)',
    employee: ' z Johnem Smithem',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, Wielka Brytania',
    cancelButton: 'Odwo??a?? spotkanie',
    confirmButton: 'Potwierd?? spotkanie',
    policy:
      '* Prosimy o unikanie anulowania w ci??gu 48 godzin od powiadomienia',
    cancelPolicy: 'Zasady anulowania',
    complete: 'Pe??na historia medyczna',
  },
  sw: {
    greeting: 'Hej Kristy, vi ses snart!',
    detail: 'Tidsinformation:',
    date: 'M??ndag 16 november kl 11:00',
    reschedule: 'Boka om',
    service: 'Konsultation (30 minuter)',
    employee: ' med John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Avbryt m??tet',
    confirmButton: 'Bekr??fta m??tet',
    policy: '* Undvik att avbryta inom 48 timmar',
    cancelPolicy: 'Avbokningsregler',
    complete: 'Komplett medicinsk historia',
  },
  ro: {
    greeting: 'Bun?? Kristy, ne vedem ??n cur??nd!',
    detail: 'Detalii despre programare:',
    date: 'Luni, 16 noiembrie la 11:00',
    reschedule: 'Reprogrameaz??',
    service: 'Consultare (30 de minute)',
    employee: ' cu John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Anglia, GB',
    cancelButton: 'Anula??i programarea',
    confirmButton: 'Confirma??i programarea',
    policy: '* V?? rug??m s?? evita??i anularea ??n termen de 48 de ore',
    cancelPolicy: 'Politica de anulare',
    complete: 'Istoric medical complet',
  },
}

interface P {
  title?: string
  iconPath?: string
  appointDate?: string
  service?: string
  name?: string
  content?: string
  address?: string
  note?: string
  medicalHistory?: string
  information?: string
  requestConfirm?: boolean
  allowRescheduling?: boolean
  allowCancellation?: boolean
  displayPolicy?: boolean
  showService?: boolean
  showEmployeeName?: boolean
  addMedicalHisButton?: boolean
  selectLanguage: string
  backGroundColor?: string
  buttonColor?: string
  informationMessage?: string
  medicalMessage?: string
  standardTapIndex?: string
  activeSocialIcons?: string[]
}

export const Appointment: FC<P> = ({
  requestConfirm,
  allowRescheduling,
  allowCancellation,
  displayPolicy,
  showService,
  showEmployeeName,
  addMedicalHisButton,
  selectLanguage,
  informationMessage,
  medicalMessage,
  backGroundColor,
  buttonColor,
  standardTapIndex,
  activeSocialIcons = [],
}) => {
  const [selectLangData, setSelectLangData] = React.useState<Email>(
    langData['en']
  )
  // const selectLangData = langData['en']
  React.useEffect(() => {
    if (langData[`${selectLanguage.toLowerCase()}`]) {
      setSelectLangData({ ...langData[`${selectLanguage.toLowerCase()}`] })
    }
  }, [selectLanguage])

  function setSocialIcon(value) {
    if (value.includes('facebook')) {
      return <FacebookOutlined style={{ padding: '5px' }} />
    } else if (value.includes('linksIn')) {
      return <LinkedinOutlined style={{ padding: '5px' }} />
    } else if (value.includes('instagram')) {
      return <InstagramOutlined style={{ padding: '5px' }} />
    } else if (value.includes('twitter')) {
      return <TwitterOutlined style={{ padding: '5px' }} />
    }
  }

  function getFlag(country) {
    switch (country) {
      case 'EN':
        return ENSVG
      case 'FR':
        return FRSVG
      case 'SP':
        return SPSVG
      case 'AR':
        return ARSVG
      case 'BG':
        return BGSVG
      case 'CS':
        return CSSVG
      case 'DA':
        return DASVG
      case 'HU':
        return HUSVG
      case 'LV':
        return LVSVG
      case 'NO':
        return NOSVG
      case 'PL':
        return PLSVG
      case 'SW':
        return SWSVG
      case 'RO':
        return ROSVG
      case 'RU':
        return RUSVG
    }
  }

  return (
    <div>
      {standardTapIndex === '1' ? (
        <div
          className={styles.cardAppointment}
          style={{ backgroundColor: backGroundColor }}
        >
          <Row justify="center" className={styles.logo}>
            <Col>
              <NormalClinicLogo />
            </Col>
          </Row>
          <Row gutter={[0, 4]}>
            <Col>
              <span className={styles.greetingText}>
                {selectLangData.greeting}
              </span>
            </Col>
          </Row>
          <Divider className={styles.divider} />
          <Row justify="start" align="middle" gutter={[0, 4]}>
            <Col>
              <Calendar />
              <span style={{ marginLeft: '5px' }}>{selectLangData.detail}</span>
            </Col>
          </Row>
          <Row gutter={[0, 4]}>
            <Col>
              <span>{selectLangData.date}</span>
              {allowRescheduling && (
                <Button type="link" className={styles.anchor}>
                  {selectLangData.reschedule}
                </Button>
              )}
            </Col>
          </Row>
          <Row gutter={[0, 4]}>
            {showService && (
              <Col>
                <span>
                  {selectLangData.service}{' '}
                  {showEmployeeName ? selectLangData.employee : ''}
                </span>
              </Col>
            )}
          </Row>
          <Row gutter={[0, 4]}>
            <Col>
              <span className={styles.mainAppointment}>
                {selectLangData.title}
              </span>
            </Col>
          </Row>
          <Row gutter={[0, 16]}>
            <Col>
              <span className={styles.address}>{selectLangData.address}</span>
            </Col>
          </Row>
          <Row gutter={[0, 16]} justify="space-between">
            {allowCancellation && (
              <Col>
                <Button
                  type="default"
                  className={styles.button}
                  backgroundColor={buttonColor}
                >
                  {selectLangData.cancelButton}
                </Button>
              </Col>
            )}
            {requestConfirm && (
              <Col>
                <Button type="primary" backgroundColor={buttonColor}>
                  {selectLangData.confirmButton}
                </Button>
              </Col>
            )}
          </Row>
          {displayPolicy && (
            <>
              <Row gutter={[0, 8]}>
                <Col>
                  <span>{selectLangData.policy}</span>
                </Col>
              </Row>
              <Row gutter={[0, 8]}>
                <Col>
                  <Button type="link" className={styles.anchor}>
                    {selectLangData.cancelPolicy}
                  </Button>
                </Col>
              </Row>
            </>
          )}

          <Divider />

          <Row justify="center" style={{ marginBottom: '20px' }}>
            <span className={styles.breaktext}>{medicalMessage}</span>
          </Row>

          <Row justify="center">
            {addMedicalHisButton && (
              <Button
                type="default"
                className={styles.button}
                backgroundColor={buttonColor}
              >
                {selectLangData.complete}
              </Button>
            )}
          </Row>

          <Row justify="center" style={{ marginTop: '20px' }}>
            <span className={styles.breaktext}>{informationMessage}</span>
          </Row>

          <Row justify="center" style={{ marginTop: '20px' }}>
            {activeSocialIcons.map((value, index) => setSocialIcon(value))}
          </Row>
        </div>
      ) : (
        <div
          className={styles.cardAddTemplateContainer}
          style={{ backgroundColor: backGroundColor }}
        >
          <Button type="default" className={styles.addTemplateTxt}>
            <img src={getFlag(selectLanguage)} alt="" />
            &nbsp;+ Add Template
          </Button>
        </div>
      )}
    </div>
  )
}

export default Appointment
