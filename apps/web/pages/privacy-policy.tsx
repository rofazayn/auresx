import {
  Anchor,
  Box,
  Container,
  List,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import PageLayout from '../components/_layouts/page-layout'

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Privacy Policy</title>
        <meta name='description' content='Priacy policy page of AuresX.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageLayout>
        <Container size='xl' dir='ltr' pt={120}>
          <Paper
            radius='lg'
            p='xl'
            sx={{
              '@media (max-width: 992px)': {
                paddingInline: 16,
              },
              paddingTop: 40,
              paddingBottom: 64,
            }}
          >
            <Stack spacing={20}>
              <Box>
                <Title order={1}>Privacy Policy</Title>
                <Text color='dimmed' size='xs'>
                  Last updated August 12, 2022
                </Text>
              </Box>
              <Box>
                <Text mb={8} size='md'>
                  This privacy notice for AuresX SPAS (doing business as AuresX)
                  (&quot;AuresX,&quot; &quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;), describes how and why we might collect,
                  store, use, and/or share (&quot;process&quot;) your
                  information when you use our services (&quot;Services&quot;),
                  such as when you:
                </Text>
                <List withPadding size='md'>
                  <List.Item>
                    Visit our website at https://auresx.com, or any website of
                    ours that links to this privacy notice
                  </List.Item>
                  <List.Item>
                    Engage with us in other related ways, including any sales,
                    marketing, or events
                  </List.Item>
                </List>
              </Box>
              <Text size='md' color='dimmed'>
                Questions or concerns? Reading this privacy notice will help you
                understand your privacy rights and choices. If you do not agree
                with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us
                at support@auresx.com.
              </Text>
              <Title order={3}>SUMMARY OF KEY POINTS</Title>
              <Text size='md'>
                This summary provides key points from our privacy notice, but
                you can find out more details about any of these topics by
                clicking the link following each key point or by using our table
                of contents below to find the section you are looking for. You
                can also click <Anchor href='#table-contents'>here</Anchor> to
                go directly to our table of contents.
              </Text>
              <Text size='md'>
                <b>What personal information do we process?</b> When you visit,
                use, or navigate our Services, we may process personal
                information depending on how you interact with AuresX and the
                Services, the choices you make, and the products and features
                you use. Click <Anchor href='#sec-1'>here</Anchor> to learn
                more.
              </Text>
              <Text size='md'>
                <b>Do we process any sensitive personal information?</b> We may
                process sensitive personal information when necessary with your
                consent or as otherwise permitted by applicable law. Click{' '}
                <Anchor href='#sec-1'>here</Anchor> to learn more.
              </Text>
              <Text size='md'>
                <b>Do we receive any information from third parties?</b> We do
                not receive any information from third parties.
              </Text>
              <Text size='md'>
                <b>How do we process your information?</b> We process your
                information to provide, improve, and administer our Services,
                communicate with you, for security and fraud prevention, and to
                comply with law. We may also process your information for other
                purposes with your consent. We process your information only
                when we have a valid legal reason to do so. Click{' '}
                <Anchor href='#sec-2'>here</Anchor> to learn more.
              </Text>
              <Text size='md'>
                <b>
                  In what situations and with which parties do we share personal
                  information?
                </b>{' '}
                We may share information in specific situations and with
                specific third parties. Click{' '}
                <Anchor href='#sec-3'>here</Anchor> to learn more.
              </Text>
              <Text size='md'>
                <b>How do we keep your information safe?</b> We have
                organizational and technical processes and procedures in place
                to protect your personal information. However, no electronic
                transmission over the internet or information storage technology
                can be guaranteed to be 100% secure, so we cannot promise or
                guarantee that hackers, cybercriminals, or other unauthorized
                third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information.
                Click <Anchor href='#sec-7'>here</Anchor> to learn more.
              </Text>
              <Text size='md'>
                <b>What are your rights?</b> Depending on where you are located
                geographically, the applicable privacy law may mean you have
                certain rights regarding your personal information. Click{' '}
                <Anchor href='#sec-9'>here</Anchor> to learn more.
              </Text>
              <Text size='md'>
                <b>How do you exercise your rights?</b> The easiest way to
                exercise your rights is by filling out our data subject request
                form available here:{' '}
                <Anchor href='https://auresx.com/data-request' target='_blank'>
                  https://auresx.com/data-request
                </Anchor>{' '}
                , or by contacting us. We will consider and act upon any request
                in accordance with applicable data protection laws.
              </Text>
              <Text size='md'>
                <b>
                  Want to learn more about what AuresX does with any information
                  we collect?
                </b>{' '}
                Click <Anchor href='#table-contents'>here</Anchor> to review the
                notice in full.
              </Text>
              <Title order={3} id='table-contents'>
                TABLE OF CONTENTS
              </Title>
              <List size='md' type='ordered'>
                <List.Item>
                  <Anchor href='#sec-1'>WHAT INFORMATION DO WE COLLECT?</Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-2'>
                    HOW DO WE PROCESS YOUR INFORMATION?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-3'>
                    WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-4'>
                    DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-5'>
                    HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-6'>
                    HOW LONG DO WE KEEP YOUR INFORMATION?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-7'>
                    HOW DO WE KEEP YOUR INFORMATION SAFE?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-8'>
                    DO WE COLLECT INFORMATION FROM MINORS?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-9'>WHAT ARE YOUR PRIVACY RIGHTS?</Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-10'>
                    CONTROLS FOR DO-NOT-TRACK FEATURES
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-11'>
                    DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-12'>
                    DO WE MAKE UPDATES TO THIS NOTICE?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-13'>
                    HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </Anchor>
                </List.Item>
                <List.Item>
                  <Anchor href='#sec-14'>
                    HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                    FROM YOU?
                  </Anchor>
                </List.Item>
              </List>
              <Title order={3} id='sec-1'>
                1. WHAT INFORMATION DO WE COLLECT?
              </Title>
              <Text size='md'>
                <b>In Short:</b> We collect personal information that you
                provide to us.
              </Text>
              <Text size='md'>
                We collect personal information that you voluntarily provide to
                us when you register on the Services, express an interest in
                obtaining information about us or our products and Services,
                when you participate in activities on the Services, or otherwise
                when you contact us.
              </Text>
              <Text size='md'>
                <b>Personal Information Provided by You.</b> The personal
                information that we collect depends on the context of your
                interactions with us and the Services, the choices you make, and
                the products and features you use. The personal information we
                collect may include the following:
              </Text>
              <List size='md'>
                <List.Item>names</List.Item>
                <List.Item>phone numbers</List.Item>
                <List.Item>email addresses</List.Item>
                <List.Item>mailing addresses</List.Item>
                <List.Item>job titles</List.Item>
                <List.Item>usernames</List.Item>
                <List.Item>passwords</List.Item>
                <List.Item>contact preferences</List.Item>
                <List.Item>contact or authentication data</List.Item>
                <List.Item>billing addresses</List.Item>
                <List.Item>debit/credit card numbers</List.Item>
              </List>
              <Text size='md'>
                <b>Sensitive Information.</b> When necessary, with your consent
                or as otherwise permitted by applicable law, we process the
                following categories of sensitive information:
              </Text>
              <List size='md'>
                <List.Item>health data</List.Item>
                <List.Item>
                  social security numbers or other government identifiers
                </List.Item>
                <List.Item>financial data</List.Item>
                <List.Item>
                  information revealing religious or philosophical beliefs
                </List.Item>
                <List.Item>information revealing political opinions</List.Item>
              </List>
              <Text size='md'>
                <b>Payment Data.</b> We may collect data necessary to process
                your payment if you make purchases, such as your payment
                instrument number (such as a credit card number), and the
                security code associated with your payment instrument. All
                payment data is stored by SATIM. You may find their privacy
                notice link(s) here:{' '}
                <Anchor href='https://www.satim.dz' target='_blank'>
                  https://www.satim.dz
                </Anchor>
                .
              </Text>
              <Text size='md'>
                <b>Social Media Login Data</b>. We may provide you with the
                option to register with us using your existing social media
                account details, like your Facebook, Twitter, or other social
                media account. If you choose to register in this way, we will
                collect the information described in the section called &quot;
                <Anchor href='#sec-5'>
                  HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                </Anchor>
                &quot; below.
              </Text>
              <Text size='md'>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </Text>
              <Title order={3}>Information automatically collected</Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> Some information — such as your Internet
                  Protocol (IP) address and/or browser and device
                  characteristics — is collected automatically when you visit
                  our Services.
                </em>
              </Text>
              <Text size='md'>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </Text>
              <Text size='md'>
                Like many businesses, we also collect information through
                cookies and similar technologies.{' '}
              </Text>
              <Text size='md'>The information we collect includes:</Text>
              <List size='md' withPadding>
                <List.Item>
                  <em>Log and Usage Data.</em> Log and usage data is
                  service-related, diagnostic, usage, and performance
                  information our servers automatically collect when you access
                  or use our Services and which we record in log files.
                  Depending on how you interact with us, this log data may
                  include your IP address, device information, browser type, and
                  settings and information about your activity in the Services
                  (such as the date/time stamps associated with your usage,
                  pages and files viewed, searches, and other actions you take
                  such as which features you use), device event information
                  (such as system activity, error reports (sometimes called
                  &quot;crash dumps&quot;), and hardware settings).
                </List.Item>
                <List.Item>
                  <em>Device Data.</em> We collect device data such as
                  information about your computer, phone, tablet, or other
                  device you use to access the Services. Depending on the device
                  used, this device data may include information such as your IP
                  address (or proxy server), device and application
                  identification numbers, location, browser type, hardware
                  model, Internet service provider and/or mobile carrier,
                  operating system, and system configuration information.
                </List.Item>
                <List.Item>
                  {' '}
                  <em>Location Data.</em> We collect location data such as
                  information about your device&apos;s location, which can be
                  either precise or imprecise. How much information we collect
                  depends on the type and settings of the device you use to
                  access the Services. For example, we may use GPS and other
                  technologies to collect geolocation data that tells us your
                  current location (based on your IP address). You can opt out
                  of allowing us to collect this information either by refusing
                  access to the information or by disabling your Location
                  setting on your device. However, if you choose to opt out, you
                  may not be able to use certain aspects of the Services.
                </List.Item>
              </List>
              <Title order={3} id='sec-2'>
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> We process your information to provide,
                  improve, and administer our Services, communicate with you,
                  for security and fraud prevention, and to comply with law. We
                  may also process your information for other purposes with your
                  consent.
                </em>
              </Text>
              <Text size='md'>
                <b>
                  We process your personal information for a variety of reasons,
                  depending on how you interact with our Services, including:
                </b>
              </Text>
              <List size='md' withPadding>
                <List.Item>
                  <b>
                    To facilitate account creation and authentication and
                    otherwise manage user accounts.
                  </b>{' '}
                  We may process your information so you can create and log in
                  to your account, as well as keep your account in working
                  order.
                </List.Item>
                <List.Item>
                  <b>
                    To deliver and facilitate delivery of services to the user.
                  </b>{' '}
                  We may process your information to provide you with the
                  requested service.
                </List.Item>
                <List.Item>
                  <b>To respond to user inquiries/offer support to users.</b> We
                  may process your information to respond to your inquiries and
                  solve any potential issues you might have with the requested
                  service.
                </List.Item>
                <List.Item>
                  <b>To send administrative information to you.</b> We may
                  process your information to send you details about our
                  products and services, changes to our terms and policies, and
                  other similar information.
                </List.Item>
                <List.Item>
                  <b>To fulfill and manage your orders.</b> We may process your
                  information to fulfill and manage your orders, payments,
                  returns, and exchanges made through the Services.
                </List.Item>
                <List.Item>
                  <b>To enable user-to-user communications.</b> We may process
                  your information if you choose to use any of our offerings
                  that allow for communication with another user.
                </List.Item>
                <List.Item>
                  <b>To request feedback.</b> We may process your information
                  when necessary to request feedback and to contact you about
                  your use of our Services.
                </List.Item>
                <List.Item>
                  <b>To send you marketing and promotional communications.</b>{' '}
                  We may process the personal information you send to us for our
                  marketing purposes, if this is in accordance with your
                  marketing preferences. You can opt out of our marketing emails
                  at any time. For more information, see &quot;
                  <Anchor href='#sec-9'>WHAT ARE YOUR PRIVACY RIGHTS?</Anchor>
                  &quot; below).
                </List.Item>
                <List.Item>
                  <b>To deliver targeted advertising to you.</b> We may process
                  your information to develop and display personalized content
                  and advertising tailored to your interests, location, and
                  more.
                </List.Item>
                <List.Item>
                  <b>To post testimonials.</b> We post testimonials on our
                  Services that may contain personal information.
                </List.Item>
                <List.Item>
                  <b>To protect our Services.</b> We may process your
                  information as part of our efforts to keep our Services safe
                  and secure, including fraud monitoring and prevention.
                </List.Item>
                <List.Item>
                  <b>To administer prize draws and competitions.</b> We may
                  process your information to administer prize draws and
                  competitions.
                </List.Item>
                <List.Item>
                  <b>
                    To evaluate and improve our Services, products, marketing,
                    and your experience.
                  </b>{' '}
                  We may process your information when we believe it is
                  necessary to identify usage trends, determine the
                  effectiveness of our promotional campaigns, and to evaluate
                  and improve our Services, products, marketing, and your
                  experience.
                </List.Item>
                <List.Item>
                  <b>To identify usage trends.</b> We may process information
                  about how you use our Services to better understand how they
                  are being used so we can improve them.
                </List.Item>
                <List.Item>
                  <b>
                    To determine the effectiveness of our marketing and
                    promotional campaigns.
                  </b>{' '}
                  We may process your information to better understand how to
                  provide marketing and promotional campaigns that are most
                  relevant to you.
                </List.Item>
                <List.Item>
                  <b>To comply with our legal obligations.</b> We may process
                  your information to comply with our legal obligations, respond
                  to legal requests, and exercise, establish, or defend our
                  legal rights.
                </List.Item>
              </List>
              <Title order={3} id='sec-3'>
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> We may share information in specific
                  situations described in this section and/or with the following
                  third parties.
                </em>
              </Text>
              <Text size='md'>
                <b>
                  We may need to share your personal information in the
                  following situations:
                </b>
              </Text>
              <List size='md' withPadding>
                <List.Item>
                  <b>Business Transfers.</b> We may share or transfer your
                  information in connection with, or during negotiations of, any
                  merger, sale of company assets, financing, or acquisition of
                  all or a portion of our business to another company.
                </List.Item>
                <List.Item>
                  <b>When we use Google Maps Platform APIs.</b> We may share
                  your information with certain Google Maps Platform APIs (e.g.,
                  Google Maps API, Places API). To find out more about Google’s
                  Privacy Policy, please refer to this link. We obtain and store
                  on your device (&quot;cache&quot;) your location for twelve
                  (12) months. You may revoke your consent anytime by contacting
                  us at the contact details provided at the end of this
                  document.
                </List.Item>
                <List.Item>
                  <b>Affiliates.</b> We may share your information with our
                  affiliates, in which case we will require those affiliates to
                  honor this privacy notice. Affiliates include our parent
                  company and any subsidiaries, joint venture partners, or other
                  companies that we control or that are under common control
                  with us.
                </List.Item>
                <List.Item>
                  <b>Business Partners.</b> We may share your information with
                  our business partners to offer you certain products, services,
                  or promotions.
                </List.Item>
                <List.Item>
                  <b>Other Users.</b> When you share personal information (for
                  example, by posting comments, contributions, or other content
                  to the Services) or otherwise interact with public areas of
                  the Services, such personal information may be viewed by all
                  users and may be publicly made available outside the Services
                  in perpetuity. If you interact with other users of our
                  Services and register for our Services through a social
                  network (such as Facebook), your contacts on the social
                  network will see your name, profile photo, and descriptions of
                  your activity. Similarly, other users will be able to view
                  descriptions of your activity, communicate with you within our
                  Services, and view your profile.
                </List.Item>
              </List>
              <Title order={3} id='sec-4'>
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> We may use cookies and other tracking
                  technologies to collect and store your information.
                </em>
              </Text>
              <Text size='md'>
                <b>
                  We may use cookies and similar tracking technologies (like web
                  beacons and pixels) to access or store information. Specific
                  information about how we use such technologies and how you can
                  refuse certain cookies is set out in our Cookie Notice.
                </b>
              </Text>
              <Title order={3} id='sec-5'>
                5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> If you choose to register or log in to our
                  services using a social media account, we may have access to
                  certain information about you.
                </em>
              </Text>
              <Text size='md'>
                Our Services offer you the ability to register and log in using
                your third-party social media account details (like your
                Facebook or Twitter logins). Where you choose to do this, we
                will receive certain profile information about you from your
                social media provider. The profile information we receive may
                vary depending on the social media provider concerned, but will
                often include your name, email address, friends list, and
                profile picture, as well as other information you choose to make
                public on such a social media platform.
              </Text>
              <Text size='md'>
                We will use the information we receive only for the purposes
                that are described in this privacy notice or that are otherwise
                made clear to you on the relevant Services. Please note that we
                do not control, and are not responsible for, other uses of your
                personal information by your third-party social media provider.
                We recommend that you review their privacy notice to understand
                how they collect, use, and share your personal information, and
                how you can set your privacy preferences on their sites and
                apps.
              </Text>
              <Title order={3} id='sec-6'>
                6. HOW LONG DO WE KEEP YOUR INFORMATION?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> We keep your information for as long as
                  necessary to fulfill the purposes outlined in this privacy
                  notice unless otherwise required by law.
                </em>
              </Text>
              <Text size='md'>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements). No
                purpose in this notice will require us keeping your personal
                information for longer than six (6) months past the termination
                of the user&apos;s account.
              </Text>
              <Text size='md'>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </Text>
              <Title order={3} id='sec-7'>
                7. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> We aim to protect your personal information
                  through a system of organizational and technical security
                  measures.
                </em>
              </Text>
              <Text size='md'>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </Text>
              <Title order={3} id='sec-8'>
                8. DO WE COLLECT INFORMATION FROM MINORS?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> We do not knowingly collect data from or
                  market to children under 18 years of age.
                </em>
              </Text>
              <Text size='md'>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent’s use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at{' '}
                <Anchor href='mailto:privacy@auresx.com'>
                  privacy@auresx.com
                </Anchor>
                .
              </Text>
              <Title order={3} id='sec-9'>
                9. WHAT ARE YOUR PRIVACY RIGHTS?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> You may review, change, or terminate your
                  account at any time.
                </em>
              </Text>
              <Text size='md'>
                If you are located in the EEA or UK and you believe we are
                unlawfully processing your personal information, you also have
                the right to complain to your local data protection supervisory
                authority. You can find their contact details here:{' '}
                <Anchor
                  href='https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm'
                  target='_blank'
                >
                  https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                </Anchor>
                .
              </Text>
              <Text size='md'>
                If you are located in Switzerland, the contact details for the
                data protection authorities are available here:{' '}
                <Anchor
                  href='https://www.edoeb.admin.ch/edoeb/en/home.html'
                  target='_blank'
                >
                  https://www.edoeb.admin.ch/edoeb/en/home.html
                </Anchor>
                .
              </Text>
              <Text size='md'>
                <u>
                  <b>Withdrawing your consent:</b>
                </u>{' '}
                If we are relying on your consent to process your personal
                information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw
                your consent at any time. You can withdraw your consent at any
                time by contacting us by using the contact details provided in
                the section &quot;
                <Anchor href='#sec-13'>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Anchor>
                &quot; below.
              </Text>
              <Text size='md'>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </Text>
              <Text size='md'>
                Opting out of marketing and promotional communications: You can
                unsubscribe from our marketing and promotional communications at
                any time by clicking on the unsubscribe link in the emails that
                we send, replying &quot;STOP&quot; or &quot;UNSUBSCRIBE&quot; to
                the SMS messages that we send, or by contacting us using the
                details provided in the section &quot;
                <Anchor href='#sec-13'>
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </Anchor>
                &quot; below. You will then be removed from the marketing lists.
                However, we may still communicate with you — for example, to
                send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </Text>
              <Title order={3}>Account Information</Title>
              <Text size='md'>
                If you would at any time like to review or change the
                information in your account or terminate your account, you can:
              </Text>
              <List withPadding size='md'>
                <List.Item>
                  Log in to your account settings and update your user account.
                </List.Item>
                <List.Item>
                  Contact us using the contact information provided.
                </List.Item>
              </List>
              <Text size='md'>
                Upon your request to terminate your account, we will deactivate
                or delete your account and information from our active
                databases. However, we may retain some information in our files
                to prevent fraud, troubleshoot problems, assist with any
                investigations, enforce our legal terms and/or comply with
                applicable legal requirements.
              </Text>
              <Text size='md'>
                <u>
                  <b>Cookies and similar technologies:</b>
                </u>{' '}
                Most Web browsers are set to accept cookies by default. If you
                prefer, you can usually choose to set your browser to remove
                cookies and to reject cookies. If you choose to remove cookies
                or reject cookies, this could affect certain features or
                services of our Services. To opt out of interest-based
                advertising by advertisers on our Services visit{' '}
                <Anchor
                  href='http://www.aboutads.info/choices/'
                  target='_blank'
                >
                  http://www.aboutads.info/choices/
                </Anchor>
                .
              </Text>
              <Text size='md'>
                If you have questions or comments about your privacy rights, you
                may email us at{' '}
                <Anchor href='mailto:privacy@auresx.com'>
                  privacy@auresx.com
                </Anchor>
                .
              </Text>
              <Title order={3} id='sec-10'>
                10. CONTROLS FOR DO-NOT-TRACK FEATURES
              </Title>
              <Text size='md'>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track (&quot;DNT&quot;) feature or
                setting you can activate to signal your privacy preference not
                to have data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </Text>
              <Title order={3} id='sec-11'>
                11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> Yes, if you are a resident of California, you
                  are granted specific rights regarding access to your personal
                  information.
                </em>
              </Text>
              <Text size='md'>
                California Civil Code Section 1798.83, also known as the
                &quot;Shine The Light&quot; law, permits our users who are
                California residents to request and obtain from us, once a year
                and free of charge, information about categories of personal
                information (if any) we disclosed to third parties for direct
                marketing purposes and the names and addresses of all third
                parties with which we shared personal information in the
                immediately preceding calendar year. If you are a California
                resident and would like to make such a request, please submit
                your request in writing to us using the contact information
                provided below.
              </Text>
              <Text size='md'>
                If you are under 18 years of age, reside in California, and have
                a registered account with Services, you have the right to
                request removal of unwanted data that you publicly post on the
                Services. To request removal of such data, please contact us
                using the contact information provided below and include the
                email address associated with your account and a statement that
                you reside in California. We will make sure the data is not
                publicly displayed on the Services, but please be aware that the
                data may not be completely or comprehensively removed from all
                our systems (e.g., backups, etc.).
              </Text>
              <Title order={3} id='sec-12'>
                12. DO WE MAKE UPDATES TO THIS NOTICE?
              </Title>
              <Text size='md'>
                <em>
                  <b>In Short:</b> Yes, we will update this notice as necessary
                  to stay compliant with relevant laws.
                </em>
              </Text>
              <Text size='md'>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated &quot;Revised&quot; date
                and the updated version will be effective as soon as it is
                accessible. If we make material changes to this privacy notice,
                we may notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </Text>
              <Title order={3} id='sec-13'>
                13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Title>
              <Text size='md'>
                If you have questions or comments about this notice, you may
                email us at{' '}
                <Anchor href='mailto:privacy@auresx.com'>
                  privacy@auresx.com
                </Anchor>{' '}
                or by post to:
              </Text>
              <Text size='md'>
                <b>Legal name: AuresX SPAS</b>
                <br />
                <b>Address: 5th of July St.</b>
                <br />
                <b>Location: Batna, Batna Province 05000.</b>
                <br />
                <b>
                  Country: Algeria (People&apos;s Democratic Republic of
                  Algeria).
                </b>
              </Text>
              <Title order={3} id='sec-14'>
                14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT
                FROM YOU?
              </Title>
              <Text size='md'>
                Based on the applicable laws of your country, you may have the
                right to request access to the personal information we collect
                from you, change that information, or delete it. To request to
                review, update, or delete your personal information, please
                visit:{' '}
                <Anchor href='https://auresx.com/data-request' target='_blank'>
                  https://auresx.com/data-request
                </Anchor>
                .
              </Text>
            </Stack>
          </Paper>
        </Container>
      </PageLayout>
    </>
  )
}

export default PrivacyPolicy
