// =============================================================================
// labels.js — конфігурація відображення таблиць
// =============================================================================
//
// Кожен запис у TABLES ідентифікується ключем виду:
//   "КОД_частина_назви_після_дати"
// Наприклад: "573546_active_declarations_by_age_gender"
//
// Якщо таблиця не знайдена у цьому файлі — відображається оригінальна назва.
//
// Поля кожного запису (всі необов'язкові):
//   label_uk    — назва таблиці (українська)
//   label_en    — назва таблиці (англійська)
//   desc_uk     — опис набору даних (українська)
//   desc_en     — опис набору даних (англійська)
//   hidden      — true = таблиця не відображається у списку
//   columns     — відповідність оригінальних назв колонок до перейменованих
//                 формат: { "оригінальна_назва": { uk: "Назва УК", en: "Name EN" } }
// =============================================================================

window.SITE_CONFIG = {

  // ── Загальний опис сайту ──────────────────────────────────────────────────
  site_desc_uk: `Цей портал надає відкритий доступ до даних Національної служби здоров'я України (НСЗУ).
Дані оновлюються щоденно з офіційних джерел на data.gov.ua.
Оберіть таблицю зліва для перегляду даних.`,

  site_desc_en: `This portal provides open access to data from the National Health Service of Ukraine (NHSU).
Data is updated daily from official sources at data.gov.ua.
Select a table on the left to browse the data.`,

  // ── Таблиці ───────────────────────────────────────────────────────────────
  tables: {

    "573546_active_declarations_by_age_gender": {
      label_uk: "Декларації — за віком і статтю",
      label_en: "Declarations — by age and gender",
      desc_uk: "Статистика активних декларацій з лікарями первинної медичної допомоги у розрізі вікових груп та статі пацієнтів.",
      desc_en: "Statistics on active declarations with primary care physicians broken down by age group and patient gender.",
      columns: {
        // "edrpou": { uk: "ЄДРПОУ", en: "EDRPOU" },
      },
    },

    "573546_active_declarations_by_doctor": {
      label_uk: "Декларації — за лікарями",
      label_en: "Declarations — by doctor",
      desc_uk: "Кількість активних декларацій у розрізі окремих лікарів первинної медичної допомоги.",
      desc_en: "Number of active declarations broken down by individual primary care physicians.",
    },

    "573546_pmg_all_pmd_doctor_info": {
      label_uk: "Декларації — інформація про лікарів",
      label_en: "Declarations — doctor info",
    },

    "573546_opys_atrybutiv_naboru_danykh": {
      hidden: true,
    },

    "764cbf_reimbursement_written_prescriptions": {
      label_uk: "Виписані е-рецепти",
      label_en: "Written e-prescriptions",
      desc_uk: "Інформація про виписані електронні рецепти за програмою реімбурсації «Доступні ліки».",
      desc_en: "Information on electronic prescriptions issued under the Affordable Medicines reimbursement programme.",
    },

    "764cbf_opys_atrybutiv_naboru_danykh": {
      hidden: true,
    },

    "8f09cf_reimbursement_legal_entity_divisions_info": {
      label_uk: "Аптеки — учасники реімбурсації",
      label_en: "Pharmacies — reimbursement participants",
      desc_uk: "Аптечні заклади, які уклали договір із НСЗУ та відпускають ліки за електронними рецептами.",
      desc_en: "Pharmacy establishments that have contracted with the NHSU and dispense medicines via electronic prescriptions.",
    },

    "8f09cf_opys_atrybutiv_naboru_danykh": {
      hidden: true,
    },

    "cc9fa1_reimbursement_released_prescriptions": {
      label_uk: "Погашені е-рецепти",
      label_en: "Redeemed e-prescriptions",
      desc_uk: "Інформація про погашені електронні рецепти за програмою реімбурсації «Доступні ліки».",
      desc_en: "Information on redeemed electronic prescriptions under the Affordable Medicines reimbursement programme.",
    },

    "cc9fa1_opys_atrybutiv_naboru_danykh": {
      hidden: true,
    },

    "f146e0_created_service_request_details_1qr": {
      label_uk: "Направлення — 1 кв.",
      label_en: "Referrals — Q1",
    },

    "f146e0_created_service_request_details_2qr": {
      label_uk: "Направлення — 2 кв.",
      label_en: "Referrals — Q2",
    },

    "f146e0_created_service_request_details_3qr": {
      label_uk: "Направлення — 3 кв.",
      label_en: "Referrals — Q3",
    },

    "manual_medical_equipment_list": {
      label_uk: "Медичне обладнання в ЕСОЗ",
      label_en: "Medical equipment in eHealth",
      desc_uk: "Реєстр медичного обладнання, зареєстрованого в Електронній системі охорони здоров'я (ЕСОЗ).",
      desc_en: "Registry of medical equipment registered in the Electronic Health System (eHealth).",
    },

    // Додайте нові таблиці нижче:
    // "КОД_назва_після_дати": {
    //   label_uk: "...",
    //   label_en: "...",
    //   desc_uk: "...",
    //   desc_en: "...",
    //   hidden: false,
    //   columns: {
    //     "orig_col": { uk: "Назва", en: "Name" },
    //   },
    // },

  },
};
