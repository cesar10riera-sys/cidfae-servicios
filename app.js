// ------------------ Firebase Initialization ------------------
const firebaseConfig = {
  apiKey: "AIzaSyA_2pPscem49DjtOqzCWY_fVtZ2npM-RG4",
  authDomain: "cidfae-servicios.firebaseapp.com",
  databaseURL: "https://cidfae-servicios-default-rtdb.firebaseio.com/",
  projectId: "cidfae-servicios",
  storageBucket: "cidfae-servicios.firebasestorage.app",
  messagingSenderId: "199012208016",
  appId: "1:199012208016:web:a676006c41761787637715",
  measurementId: "G-KEMRD3GB2Z"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Helper functions to save data to Firebase instead of localStorage
function guardarUsuarioFirebase(user) {
  db.ref('usuarios/' + user.cedula).set(user);
}
function guardarReservaFirebase(cedula, reserva) {
  db.ref('rancho/' + cedula).push().set(reserva);
}
function guardarPeluqueriaFirebase(cedula, turno) {
  db.ref('peluqueria/' + cedula).push().set(turno);
}

// Replace any saveUsers(), saveTurns(), saveRanchoRecords() calls in your code with these functions


// ------------------ Firebase Initialization ------------------
const firebaseConfig = {
  apiKey: "AIzaSyA_2pPscem49DjtOqzCWY_fVtZ2npM-RG4",
  authDomain: "cidfae-servicios.firebaseapp.com",
  databaseURL: "https://cidfae-servicios-default-rtdb.firebaseio.com/",
  projectId: "cidfae-servicios",
  storageBucket: "cidfae-servicios.firebasestorage.app",
  messagingSenderId: "199012208016",
  appId: "1:199012208016:web:a676006c41761787637715",
  measurementId: "G-KEMRD3GB2Z"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Helper functions to replace localStorage
function guardarUsuarioFirebase(user) {
  db.ref('usuarios/' + user.cedula).set(user);
}

function guardarReservaFirebase(cedula, reserva) {
  const nuevaReserva = db.ref('rancho/' + cedula).push();
  nuevaReserva.set(reserva);
}

function guardarPeluqueriaFirebase(cedula, turno) {
  const nuevaReserva = db.ref('peluqueria/' + cedula).push();
  nuevaReserva.set(turno);
}

// Original code starts here
const authScreen = document.querySelector("#auth-screen");
const appShell = document.querySelector("#app-shell");
const authTabs = document.querySelectorAll("[data-auth-view]");
const authPanels = document.querySelectorAll("[data-auth-panel]");
const authMessage = document.querySelector("#auth-message");
const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const recoverForm = document.querySelector("#recover-form");
const logoutButton = document.querySelector("#logout-button");
const sessionName = document.querySelector("#session-name");
const sessionRole = document.querySelector("#session-role");
const sessionBalance = document.querySelector("#session-balance");
const sessionDebt = document.querySelector("#session-debt");
const homeNav = document.querySelector("#home-nav");
const hairNav = document.querySelector("#hair-nav");
const ranchoNav = document.querySelector("#rancho-nav");
const adminNav = document.querySelector("#admin-nav");
const homeView = document.querySelector("#home-view");
const bookingView = document.querySelector("#booking-view");
const ranchoView = document.querySelector("#rancho-view");
const ticketView = document.querySelector("#ticket-view");
const adminView = document.querySelector("#admin-view");
const form = document.querySelector("#booking-form");
const dateInput = document.querySelector("#date");
const slotsContainer = document.querySelector("#time-slots");
const gradeInput = document.querySelector("#grade");
const lastNameInput = document.querySelector("#last-name");
const firstNameInput = document.querySelector("#first-name");
const personIdInput = document.querySelector("#person-id");
const unitInput = document.querySelector("#unit");
const contactInput = document.querySelector("#contact");
const ticketCode = document.querySelector("#ticket-code");
const ticketName = document.querySelector("#ticket-name");
const ticketDate = document.querySelector("#ticket-date");
const ticketTime = document.querySelector("#ticket-time");
const ticketService = document.querySelector("#ticket-service");
const ticketMessage = document.querySelector("#ticket-message");
const userSummaryList = document.querySelector("#user-summary-list");
const userReportButton = document.querySelector("#user-report-button");
const adminSearch = document.querySelector("#admin-search");
const adminStatusFilter = document.querySelector("#admin-status-filter");
const turnList = document.querySelector("#turn-list");
const statTotal = document.querySelector("#stat-total");
const statPending = document.querySelector("#stat-pending");
const statDone = document.querySelector("#stat-done");
const adminTabs = document.querySelectorAll("[data-admin-panel]");
const adminTurnsPanel = document.querySelector("#admin-turns-panel");
const adminUsersPanel = document.querySelector("#admin-users-panel");
const adminRanchoPanel = document.querySelector("#admin-rancho-panel");
const userSearch = document.querySelector("#user-search");
const userRoleFilter = document.querySelector("#user-role-filter");
const userList = document.querySelector("#user-list");
const recoveryList = document.querySelector("#recovery-list");
const userStatTotal = document.querySelector("#user-stat-total");
const userStatAdmin = document.querySelector("#user-stat-admin");
const userStatRecovery = document.querySelector("#user-stat-recovery");
const ranchoStatus = document.querySelector("#rancho-status");
const ranchoUnitSelect = document.querySelector("#rancho-unit-select");
const ranchoHoursCard = document.querySelector("#rancho-hours-card");
const ranchoCount = document.querySelector("#rancho-count");
const ranchoDate = document.querySelector("#rancho-date");
const ranchoHours = document.querySelector("#rancho-hours");
const ranchoMenu = document.querySelector("#rancho-menu");
const ranchoHistory = document.querySelector("#rancho-history");
const ranchoStatTotal = document.querySelector("#rancho-stat-total");
const ranchoStatIncome = document.querySelector("#rancho-stat-income");
const ranchoStatDebt = document.querySelector("#rancho-stat-debt");
const ranchoOpenHour = document.querySelector("#rancho-open-hour");
const ranchoCloseHour = document.querySelector("#rancho-close-hour");
const ranchoBank = document.querySelector("#rancho-bank");
const ranchoAccount = document.querySelector("#rancho-account");
const ranchoOwner = document.querySelector("#rancho-owner");
const ranchoReference = document.querySelector("#rancho-reference");
const ranchoUnits = document.querySelector("#rancho-units");
const ranchoQrText = document.querySelector("#rancho-qr-text");
const ranchoQrFile = document.querySelector("#rancho-qr-file");
const ranchoAdminSearch = document.querySelector("#rancho-admin-search");
const ranchoMealFilter = document.querySelector("#rancho-meal-filter");
const ranchoAdminList = document.querySelector("#rancho-admin-list");
const saveRanchoSettingsButton = document.querySelector("#save-rancho-settings");
const saveSystemSettingsButton = document.querySelector("#save-system-settings");
const systemLogoFile = document.querySelector("#system-logo-file");
const systemLogoPreview = document.querySelector("#system-logo-preview");
const systemQrPreview = document.querySelector("#system-qr-preview");
const systemSettingsMessage = document.querySelector("#system-settings-message");
const resetSystemLogoButton = document.querySelector("#reset-system-logo");
const adminHairGrade = document.querySelector("#admin-hair-grade");
const adminHairLastName = document.querySelector("#admin-hair-last-name");
const adminHairFirstName = document.querySelector("#admin-hair-first-name");
const adminHairCedula = document.querySelector("#admin-hair-cedula");
const adminHairUnit = document.querySelector("#admin-hair-unit");
const adminHairContact = document.querySelector("#admin-hair-contact");
const adminHairDate = document.querySelector("#admin-hair-date");
const adminHairQty = document.querySelector("#admin-hair-qty");
const adminHairCreate = document.querySelector("#admin-hair-create");
const hairClosedDate = document.querySelector("#hair-closed-date");
const hairClosedReason = document.querySelector("#hair-closed-reason");
const addHairClosedDate = document.querySelector("#add-hair-closed-date");
const hairClosedList = document.querySelector("#hair-closed-list");
const hairReportStart = document.querySelector("#hair-report-start");
const hairReportEnd = document.querySelector("#hair-report-end");
const hairReportButton = document.querySelector("#hair-report-button");
const ranchoReportStart = document.querySelector("#rancho-report-start");
const ranchoReportEnd = document.querySelector("#rancho-report-end");
const ranchoReportButton = document.querySelector("#rancho-report-button");
const bulkRanchoDate = document.querySelector("#bulk-rancho-date");
const bulkRanchoUnit = document.querySelector("#bulk-rancho-unit");
const bulkRanchoMeal = document.querySelector("#bulk-rancho-meal");
const bulkRanchoQty = document.querySelector("#bulk-rancho-qty");
const bulkRanchoPerson = document.querySelector("#bulk-rancho-person");
const bulkRanchoCreate = document.querySelector("#bulk-rancho-create");
const reportView = document.querySelector("#report-view");
const reportContent = document.querySelector("#report-content");
const closeReport = document.querySelector("#close-report");
const printReport = document.querySelector("#print-report");
const transferBank = document.querySelector("#transfer-bank");
const transferAccount = document.querySelector("#transfer-account");
const transferOwner = document.querySelector("#transfer-owner");
const transferReference = document.querySelector("#transfer-reference");
const transferQr = document.querySelector("#transfer-qr");
const homeBalance = document.querySelector("#home-balance");
const homeDebt = document.querySelector("#home-debt");
const homeUnit = document.querySelector("#home-unit");
const homeTransferBank = document.querySelector("#home-transfer-bank");
const homeTransferAccount = document.querySelector("#home-transfer-account");
const homeTransferOwner = document.querySelector("#home-transfer-owner");
const homeTransferReference = document.querySelector("#home-transfer-reference");
const homeTransferQr = document.querySelector("#home-transfer-qr");
const homeHairAction = document.querySelector("#home-hair-action");
const homeRanchoAction = document.querySelector("#home-rancho-action");
const sidebarEyebrow = document.querySelector(".sidebar .brand .eyebrow");
const sidebarTitle = document.querySelector(".sidebar .brand h1");
const adminGeneralPanel = document.querySelector("#admin-general-panel");
const adminIncomeDay = document.querySelector("#admin-income-day");
const adminIncomeWeek = document.querySelector("#admin-income-week");
const adminIncomeMonth = document.querySelector("#admin-income-month");
const adminUserTotal = document.querySelector("#admin-user-total");
const adminHairMonth = document.querySelector("#admin-hair-month");
const adminRanchoMonth = document.querySelector("#admin-rancho-month");
const adminExpenseMonth = document.querySelector("#admin-expense-month");
const adminBalanceMonth = document.querySelector("#admin-balance-month");
const adminDebtTotal = document.querySelector("#admin-debt-total");
const adminRanchoTomorrow = document.querySelector("#admin-rancho-tomorrow");
const adminHairPending = document.querySelector("#admin-hair-pending");
const adminRecoveryTotal = document.querySelector("#admin-recovery-total");
const adminExpenseDate = document.querySelector("#admin-expense-date");
const adminExpenseService = document.querySelector("#admin-expense-service");
const adminExpenseConcept = document.querySelector("#admin-expense-concept");
const adminExpenseAmount = document.querySelector("#admin-expense-amount");
const adminExpenseCreate = document.querySelector("#admin-expense-create");
const singleRanchoDate = document.querySelector("#single-rancho-date");
const singleRanchoUnit = document.querySelector("#single-rancho-unit");
const singleRanchoMeal = document.querySelector("#single-rancho-meal");
const singleRanchoGrade = document.querySelector("#single-rancho-grade");
const singleRanchoLastName = document.querySelector("#single-rancho-last-name");
const singleRanchoFirstName = document.querySelector("#single-rancho-first-name");
const singleRanchoCedula = document.querySelector("#single-rancho-cedula");
const singleRanchoCreate = document.querySelector("#single-rancho-create");
const slots = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30"];
const haircutPrice = 2.5;
const maxDebt = 5;
let pendingSystemLogoImage = "";
let pendingSystemQrImage = "";
const grades = ["Soldado", "Cabo Segundo", "Cabo Primero", "Sargento Segundo", "Sargento Primero", "Suboficial Segundo", "Suboficial Primero", "Subteniente", "Teniente", "Capitán", "Mayor", "Teniente Coronel", "Coronel"];
const mealIds = ["desayuno", "almuerzo", "merienda"];
const storageKeys = {
  users: "cidfae_users",
  turns: "cidfae_turns",
  session: "cidfae_session",
  recoveries: "cidfae_recoveries",
  ranchoMenu: "cidfae_rancho_menu",
  ranchoSettings: "cidfae_rancho_settings",
  ranchoRecords: "cidfae_rancho_records",
  systemSettings: "cidfae_system_settings",
  hairClosedDates: "cidfae_hair_closed_dates",
  expenses: "cidfae_expenses"
};

const defaultSystemSettings = {
  logoImage: "assets/sello-logistica-cidfae.png",
  banco: "Banco Pichincha",
  cuenta: "0000000000",
  titular: "CIDFAE",
  referencia: "Cédula del usuario",
  qrText: "CIDFAE | Cuenta 0000000000",
  qrImage: ""
};

const seedUsers = [
  { grade: "Soldado", lastName: "Andrade", firstName: "Luis", cedula: "1720000000", email: "usuario.demo@cidfae.local", password: "usuario123", role: "user", saldo: 5, deuda: 0, reparto: "CIDFAE" },
  { grade: "Capitán", lastName: "Molina", firstName: "Ana", cedula: "1700000001", email: "admin.demo@cidfae.local", password: "admin123", role: "admin", saldo: 10, deuda: 0, reparto: "Administración" }
];

const seedRanchoMenu = {
  desayuno: { titulo: "Desayuno", descripcion: "Café, pan, huevo y fruta", precio: 1.25 },
  almuerzo: { titulo: "Almuerzo", descripcion: "Sopa, plato fuerte, jugo y postre", precio: 2.75 },
  merienda: { titulo: "Merienda", descripcion: "Arroz, proteína, ensalada y bebida", precio: 2.25 }
};

const seedRanchoSettings = {
  hora_apertura: 8,
  hora_cierre: 16,
  banco: "Banco Pichincha",
  cuenta: "0000000000",
  titular: "CIDFAE Rancho",
  referencia: "Cédula del usuario",
  repartos: ["CIDFAE", "GOMAI"],
  qrText: "CIDFAE Rancho | Cuenta 0000000000"
};

const seedTurns = [
  {
    code: "CID-248",
    grade: "Capitán",
    lastName: "Molina",
    firstName: "Ana",
    personId: "1712345678",
    unit: "Talento Humano",
    contact: "0991112222",
    date: "2026-06-08",
    time: "08:30",
    cutType: "Militar",
    notes: "Preferencia por corte bajo.",
    status: "Confirmado"
  },
  {
    code: "CID-391",
    grade: "Sargento Primero",
    lastName: "Rivas",
    firstName: "Carlos",
    personId: "1722223333",
    unit: "Logistica",
    contact: "0983334444",
    date: "2026-06-08",
    time: "11:00",
    cutType: "Militar",
    notes: "",
    status: "Pendiente"
  },
  {
    code: "CID-425",
    grade: "Teniente",
    lastName: "Solis",
    firstName: "Maria",
    personId: "1700001111",
    unit: "Comunicacion",
    contact: "0977778888",
    date: "2026-06-09",
    time: "10:00",
    cutType: "Militar",
    notes: "Turno creado por administracion.",
    status: "Atendido"
  }
];

function load(key, fallback) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : fallback;
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeCedula(cedula) {
  return cedula.replace(/\D/g, "");
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function maskEmail(email) {
  const [name, domain] = email.split("@");
  if (!name || !domain) return "correo registrado";
  const visible = name.slice(0, Math.min(3, name.length));
  return `${visible}${"*".repeat(Math.max(2, name.length - visible.length))}@${domain}`;
}

function displayPerson(person) {
  const parts = [person.grade, person.lastName, person.firstName].filter(Boolean);
  if (parts.length) return parts.join(" ");
  return person.fullName || person.name || "Sin registrar";
}

function splitLegacyName(value) {
  const parts = String(value || "").trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return { lastName: "", firstName: "" };
  if (parts.length === 1) return { lastName: parts[0], firstName: "" };
  return { lastName: parts.slice(1).join(" "), firstName: parts[0] };
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDateTime(value) {
  return new Intl.DateTimeFormat("es-EC", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function formatMoney(value) {
  return `$${Number(value || 0).toFixed(2)}`;
}

function settleAccount(user) {
  const balance = Number(user.saldo || 0);
  const debt = Number(user.deuda || 0);
  if (balance <= 0 || debt <= 0) {
    user.saldo = Math.max(0, balance);
    user.deuda = Math.max(0, debt);
    return;
  }
  if (balance >= debt) {
    user.saldo = balance - debt;
    user.deuda = 0;
    return;
  }
  user.saldo = 0;
  user.deuda = debt - balance;
}

function tomorrowISO() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return toISODate(date);
}

function nextHairReportDate() {
  const nextServiceDate = toISODate(nextBusinessDate(new Date()));
  const upcomingDates = getTurns()
    .filter((turn) => turn.status !== "Cancelado")
    .map((turn) => turn.date)
    .filter((date) => date >= nextServiceDate)
    .sort();
  return upcomingDates[0] || nextServiceDate;
}

function initializeData() {
  const storedUsers = load(storageKeys.users, null);
  if (!storedUsers) {
    save(storageKeys.users, seedUsers);
  } else {
    const migratedUsers = storedUsers.map((user) => {
      const cedula = user.cedula || (user.role === "admin" ? "1700000001" : "1720000000");
      const email = user.email || (user.role === "admin" ? "admin.demo@cidfae.local" : "usuario.demo@cidfae.local");
      const legacy = splitLegacyName(user.name);
      const grade = user.grade || (user.role === "admin" ? "Capitán" : "Soldado");
      const lastName = user.lastName || legacy.lastName || (user.role === "admin" ? "Molina" : "Andrade");
      const firstName = user.firstName || legacy.firstName || (user.role === "admin" ? "Ana" : "Luis");
      const migratedUser = { ...user, grade, lastName, firstName, cedula, email, saldo: Number(user.saldo || 0), deuda: Number(user.deuda || 0), reparto: user.reparto || "Ninguno" };
      settleAccount(migratedUser);
      return migratedUser;
    });
    save(storageKeys.users, migratedUsers);
  }
  const storedTurns = load(storageKeys.turns, null);
  if (!storedTurns) {
    save(storageKeys.turns, seedTurns);
  } else {
    const migratedTurns = storedTurns.map((turn) => {
      if (turn.grade && turn.lastName && turn.firstName) return turn;
      const legacy = splitLegacyName(turn.fullName);
      return {
        ...turn,
        grade: turn.grade || "Soldado",
        lastName: turn.lastName || legacy.lastName,
        firstName: turn.firstName || legacy.firstName
      };
    });
    save(storageKeys.turns, migratedTurns);
  }
  if (!localStorage.getItem(storageKeys.ranchoMenu)) save(storageKeys.ranchoMenu, seedRanchoMenu);
  const storedSettings = load(storageKeys.ranchoSettings, null);
  save(storageKeys.ranchoSettings, { ...seedRanchoSettings, ...(storedSettings || {}) });
  if (!localStorage.getItem(storageKeys.ranchoRecords)) save(storageKeys.ranchoRecords, []);
  const storedSystemSettings = load(storageKeys.systemSettings, null);
  const legacyPayment = storedSettings
    ? {
        banco: storedSettings.banco,
        cuenta: storedSettings.cuenta,
        titular: storedSettings.titular,
        referencia: storedSettings.referencia,
        qrText: storedSettings.qrText,
        qrImage: storedSettings.qrImage
      }
    : {};
  save(storageKeys.systemSettings, { ...defaultSystemSettings, ...legacyPayment, ...(storedSystemSettings || {}) });
  if (!localStorage.getItem(storageKeys.hairClosedDates)) save(storageKeys.hairClosedDates, []);
  if (!localStorage.getItem(storageKeys.expenses)) save(storageKeys.expenses, []);
}

function getUsers() {
  return load(storageKeys.users, []);
}

function getTurns() {
  return load(storageKeys.turns, []);
}

function saveUsers(users) {
  save(storageKeys.users, users);
}

function saveTurns(turns) {
  save(storageKeys.turns, turns);
}

function getRecoveries() {
  return load(storageKeys.recoveries, []);
}

function saveRecoveries(recoveries) {
  save(storageKeys.recoveries, recoveries);
}

function getRanchoMenu() {
  return load(storageKeys.ranchoMenu, seedRanchoMenu);
}

function saveRanchoMenu(menu) {
  save(storageKeys.ranchoMenu, menu);
}

function getRanchoSettings() {
  return load(storageKeys.ranchoSettings, seedRanchoSettings);
}

function saveRanchoSettingsData(settings) {
  save(storageKeys.ranchoSettings, settings);
}

function getRanchoRecords() {
  return load(storageKeys.ranchoRecords, []);
}

function saveRanchoRecords(records) {
  save(storageKeys.ranchoRecords, records);
}

function getSystemSettings() {
  return load(storageKeys.systemSettings, defaultSystemSettings);
}

function saveSystemSettings(settings) {
  save(storageKeys.systemSettings, settings);
}

function getHairClosedDates() {
  return load(storageKeys.hairClosedDates, []);
}

function saveHairClosedDates(items) {
  save(storageKeys.hairClosedDates, items);
}

function hairClosedFor(date) {
  return getHairClosedDates().find((item) => item.date === date);
}

function getExpenses() {
  return load(storageKeys.expenses, []);
}

function saveExpenses(items) {
  save(storageKeys.expenses, items);
}

function applySystemLogo() {
  const logoImage = getSystemSettings().logoImage || defaultSystemSettings.logoImage;
  document.querySelectorAll(".brand-seal").forEach((image) => {
    image.src = logoImage;
  });
  if (systemLogoPreview) {
    systemLogoPreview.src = logoImage;
  }
}

function showSystemSettingsMessage(text, type = "success") {
  systemSettingsMessage.textContent = text;
  systemSettingsMessage.className = `settings-message ${type}`;
}

function getSession() {
  return load(storageKeys.session, null);
}

function setSession(user) {
  save(storageKeys.session, { grade: user.grade, lastName: user.lastName, firstName: user.firstName, cedula: user.cedula, email: user.email, role: user.role, reparto: user.reparto });
}

function clearSession() {
  localStorage.removeItem(storageKeys.session);
}

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  if (!value) return "Seleccione una fecha";
  const [year, month, day] = value.split("-");
  return new Intl.DateTimeFormat("es-EC", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(Number(year), Number(month) - 1, Number(day)));
}

function nextBusinessDate(fromDate) {
  const date = new Date(fromDate);
  while (date.getDay() === 0 || date.getDay() === 6) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}

function bookedTimesFor(date) {
  return getTurns()
    .filter((turn) => turn.date === date && turn.status !== "Cancelado")
    .map((turn) => turn.time);
}

function renderSlots() {
  const selectedDate = dateInput.value;
  const closed = hairClosedFor(selectedDate);
  if (closed) {
    slotsContainer.innerHTML = `<p class="empty-state">No disponible: ${escapeHTML(closed.reason || "sin atención")}</p>`;
    syncTicket();
    return;
  }
  const booked = bookedTimesFor(selectedDate);
  const firstFree = slots.find((time) => !booked.includes(time));

  slotsContainer.innerHTML = slots
    .map((slot) => {
      const disabled = booked.includes(slot) ? "disabled" : "";
      const checked = slot === firstFree ? "checked" : "";
      return `
        <label class="slot">
          <input type="radio" name="time" value="${slot}" ${checked} ${disabled} required>
          <span>${slot}</span>
        </label>
      `;
    })
    .join("");

  syncTicket();
}

function syncTicket() {
  const person = {
    grade: gradeInput.value,
    lastName: lastNameInput.value.trim(),
    firstName: firstNameInput.value.trim()
  };
  const user = currentUser();
  const movements = userMovements(user).slice(0, 4);
  ticketName.textContent = user ? displayPerson(user) : displayPerson(person);
  ticketDate.textContent = formatMoney(user?.saldo || 0);
  ticketTime.textContent = formatMoney(user?.deuda || 0);
  ticketService.textContent = `${formatDate(dateInput.value)} · ${document.querySelector('input[name="time"]:checked')?.value || "Seleccione horario"}`;
  userSummaryList.innerHTML = movements.length
    ? movements.map((item) => `
        <article class="summary-item">
          <span>${escapeHTML(item.type)}</span>
          <strong>${escapeHTML(item.detail)}</strong>
          <small>${escapeHTML(item.when)} · ${formatMoney(item.amount)}</small>
        </article>
      `).join("")
    : `<p class="empty-state compact">Aún no registra consumos ni turnos.</p>`;
}

function createCode() {
  const turns = getTurns();
  return createCodeFrom(turns);
}

function createCodeFrom(turns) {
  let code = "";
  do {
    code = `CID-${Math.floor(100 + Math.random() * 900)}`;
  } while (turns.some((turn) => turn.code === code));
  return code;
}

function initializeDate() {
  const nextDate = nextBusinessDate(new Date());
  const minDate = toISODate(nextDate);
  dateInput.min = minDate;
  dateInput.value = minDate;
  adminHairDate.value = minDate;
  hairClosedDate.value = minDate;
  hairReportStart.value = minDate;
  hairReportEnd.value = minDate;
  ranchoReportStart.value = tomorrowISO();
  ranchoReportEnd.value = tomorrowISO();
  singleRanchoDate.value = tomorrowISO();
  bulkRanchoDate.value = tomorrowISO();
  adminExpenseDate.value = toISODate(new Date());
  adminHairGrade.innerHTML = grades.map((grade) => `<option value="${grade}">${grade}</option>`).join("");
  singleRanchoGrade.innerHTML = grades.map((grade) => `<option value="${grade}">${grade}</option>`).join("");
}

function showAuthPanel(panelName) {
  document.querySelector(".auth-card")?.setAttribute("data-auth-mode", panelName);
  authTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.authView === panelName));
  authPanels.forEach((panel) => panel.classList.toggle("hidden", panel.dataset.authPanel !== panelName));
  authMessage.textContent = "";
}

function showApp(user) {
  authScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  sessionName.textContent = displayPerson(user);
  sessionRole.textContent = user.role === "admin" ? "Administrador" : "Solicitante";
  setSidebarForRole(user);
  updateSessionAccount();

  if (user.role === "admin") {
    showAdmin();
  } else {
    showHome();
  }
}

function showHome() {
  setActiveService("home");
  homeView.classList.remove("hidden");
  bookingView.classList.add("hidden");
  ranchoView.classList.add("hidden");
  ticketView.classList.remove("hidden");
  adminView.classList.add("hidden");
  updateSessionAccount();
  syncTicket();
}

function showBooking() {
  setActiveService("hair");
  homeView.classList.add("hidden");
  bookingView.classList.remove("hidden");
  ranchoView.classList.add("hidden");
  ticketView.classList.remove("hidden");
  adminView.classList.add("hidden");
  populateRequesterFromSession();
  syncTicket();
}

function showRancho() {
  const session = getSession();
  if (session?.role === "admin") {
    showAdmin();
    return;
  }
  setActiveService("rancho");
  homeView.classList.add("hidden");
  bookingView.classList.add("hidden");
  ticketView.classList.remove("hidden");
  adminView.classList.add("hidden");
  ranchoView.classList.remove("hidden");
  renderRancho();
  syncTicket();
}

function populateRequesterFromSession() {
  const session = getSession();
  if (!session) return;
  if (session.grade) gradeInput.value = session.grade;
  if (session.lastName) lastNameInput.value = session.lastName;
  if (session.firstName) firstNameInput.value = session.firstName;
  if (session.cedula) personIdInput.value = session.cedula;
}

function showAdmin() {
  setActiveService("home");
  homeView.classList.add("hidden");
  bookingView.classList.add("hidden");
  ranchoView.classList.add("hidden");
  ticketView.classList.add("hidden");
  adminView.classList.remove("hidden");
  showAdminPanel("general");
}

function showLogin() {
  appShell.classList.add("hidden");
  authScreen.classList.remove("hidden");
  showAuthPanel("login");
}

function readFormData(targetForm) {
  return Object.fromEntries(new FormData(targetForm).entries());
}

function setActiveService(service) {
  [
    [homeNav, "home"],
    [hairNav, "hair"],
    [ranchoNav, "rancho"],
    [adminNav, "admin"]
  ].forEach(([button, value]) => {
    button.classList.toggle("active", service === value);
  });
}

function setSidebarForRole(user) {
  const isAdmin = user.role === "admin";
  sidebarEyebrow.textContent = isAdmin ? "ADMINISTRADOR" : "CIDFAE";
  sidebarTitle.textContent = isAdmin ? "Panel de control" : "Turnos de servicios";
  homeNav.classList.toggle("hidden", false);
  hairNav.classList.toggle("hidden", false);
  ranchoNav.classList.toggle("hidden", false);
  adminNav.classList.toggle("hidden", !isAdmin);
  document.querySelector(".service-item.muted")?.classList.toggle("hidden", isAdmin);
  homeNav.querySelector("strong").textContent = isAdmin ? "General" : "Inicio";
  homeNav.querySelector("small").textContent = isAdmin ? "Resumen y pagos" : "Cuenta y pagos";
  hairNav.querySelector("strong").textContent = isAdmin ? "Peluquería" : "Corte de cabello";
  hairNav.querySelector("small").textContent = isAdmin ? "Turnos y bloqueos" : "Reserva activa";
  ranchoNav.querySelector("strong").textContent = "Rancho";
  ranchoNav.querySelector("small").textContent = isAdmin ? "Consumos y reportes" : "Alimentación";
  adminNav.querySelector("strong").textContent = "Usuarios";
  adminNav.querySelector("small").textContent = "Cuentas y claves";
}

function currentUser() {
  const session = getSession();
  if (!session) return null;
  return getUsers().find((user) => normalizeCedula(user.cedula || "") === normalizeCedula(session.cedula || ""));
}

function updateSessionAccount() {
  const user = currentUser();
  const settings = getSystemSettings();
  const units = getRanchoSettings().repartos || seedRanchoSettings.repartos;
  const selectedUnit = user?.reparto && user.reparto !== "Ninguno" ? user.reparto : "";
  const hasDebt = Number(user?.deuda || 0) > 0;
  sessionBalance.textContent = user ? `Saldo: ${formatMoney(user.saldo)}` : "Saldo: $0.00";
  sessionDebt.textContent = user ? `Deuda: ${formatMoney(user.deuda)}` : "Deuda: $0.00";
  homeBalance.textContent = formatMoney(user?.saldo || 0);
  homeDebt.textContent = formatMoney(user?.deuda || 0);
  sessionDebt.classList.toggle("debt-value", hasDebt);
  homeDebt.classList.toggle("debt-value", hasDebt);
  ticketTime.classList.toggle("debt-value", hasDebt);
  homeUnit.innerHTML = `<option value="">Seleccione</option>${units.map((unit) => `<option value="${escapeHTML(unit)}" ${unit === selectedUnit ? "selected" : ""}>${escapeHTML(unit)}</option>`).join("")}`;
  transferBank.textContent = settings.banco || "Banco";
  transferAccount.textContent = settings.cuenta || "0000000000";
  transferOwner.textContent = settings.titular || "CIDFAE";
  transferReference.textContent = user?.cedula || settings.referencia || "Cédula";
  homeTransferBank.textContent = settings.banco || "Banco";
  homeTransferAccount.textContent = settings.cuenta || "0000000000";
  homeTransferOwner.textContent = settings.titular || "CIDFAE";
  homeTransferReference.textContent = user?.cedula || settings.referencia || "Cédula";
  renderQr(transferQr, settings);
  renderQr(homeTransferQr, settings);
}

function updateCurrentUserReparto(reparto) {
  const user = currentUser();
  if (!user) return;
  const users = getUsers();
  const storedUser = users.find((item) => normalizeCedula(item.cedula || "") === normalizeCedula(user.cedula || ""));
  if (!storedUser) return;
  storedUser.reparto = reparto || "Ninguno";
  saveUsers(users);
  setSession(storedUser);
  updateSessionAccount();
  syncTicket();
}

function renderQr(target, settings) {
  if (settings.qrImage) {
    target.innerHTML = `<img src="${settings.qrImage}" alt="QR para transferencia">`;
    return;
  }
  const text = settings.qrText || `${settings.banco} ${settings.cuenta}`;
  const seed = Array.from(String(text)).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const cells = Array.from({ length: 49 }, (_, index) => {
    const active = index % 8 === 0 || index % 6 === 0 || ((index * 17 + seed) % 5 === 0);
    return `<span class="${active ? "on" : ""}"></span>`;
  }).join("");
  target.innerHTML = cells;
}

function serviceOpen(settings) {
  const hour = new Date().getHours();
  return Number(settings.hora_apertura) <= hour && hour < Number(settings.hora_cierre);
}

function ranchoRecordExists(user, mealTitle, date) {
  return getRanchoRecords().some((record) => record.cedula === user.cedula && record.fechaConsumo === date && record.comida === mealTitle);
}

function applyAccountCharge(user, amount) {
  const users = getUsers();
  const storedUser = users.find((item) => normalizeCedula(item.cedula || "") === normalizeCedula(user.cedula || ""));
  if (!storedUser) return false;

  const nextBalance = Number(storedUser.saldo || 0) - amount;
  const currentDebt = Number(storedUser.deuda || 0);
  const nextDebt = nextBalance >= 0 ? currentDebt : currentDebt + Math.abs(nextBalance);
  if (currentDebt >= maxDebt || nextDebt > maxDebt) {
    window.alert(`No se puede registrar el servicio. La deuda maxima permitida es ${formatMoney(maxDebt)}.`);
    return false;
  }

  if (nextBalance >= 0) {
    storedUser.saldo = nextBalance;
  } else {
    storedUser.saldo = 0;
    storedUser.deuda = nextDebt;
  }
  saveUsers(users);
  updateSessionAccount();
  return true;
}

function refundAccountCharge(cedula, amount) {
  const users = getUsers();
  const user = users.find((item) => normalizeCedula(item.cedula || "") === normalizeCedula(cedula || ""));
  if (!user) return;

  const debt = Number(user.deuda || 0);
  const value = Number(amount || 0);
  if (debt > 0) {
    const remainingDebt = Math.max(0, debt - value);
    const credit = value > debt ? value - debt : 0;
    user.deuda = remainingDebt;
    user.saldo = Number(user.saldo || 0) + credit;
  } else {
    user.saldo = Number(user.saldo || 0) + value;
  }
  saveUsers(users);
  updateSessionAccount();
}

function renderRancho() {
  const user = currentUser();
  if (!user) return;

  const menu = getRanchoMenu();
  const settings = getRanchoSettings();
  const open = serviceOpen(settings);
  const date = tomorrowISO();
  const displayDate = formatDate(date);

  ranchoStatus.classList.toggle("closed", !open);
  ranchoStatus.lastChild.textContent = open ? " Servicio abierto" : " Servicio cerrado";
  const units = settings.repartos || seedRanchoSettings.repartos;
  ranchoUnitSelect.innerHTML = units.map((unit) => `<option value="${escapeHTML(unit)}" ${unit === user.reparto ? "selected" : ""}>${escapeHTML(unit)}</option>`).join("");
  ranchoHoursCard.textContent = `${String(settings.hora_apertura).padStart(2, "0")}:00 a ${String(settings.hora_cierre).padStart(2, "0")}:00`;
  ranchoCount.textContent = String(getRanchoRecords().filter((record) => record.cedula === user.cedula && record.fechaConsumo === date).length);
  ranchoDate.textContent = `Consumo para ${displayDate}`;
  ranchoHours.textContent = `${String(settings.hora_apertura).padStart(2, "0")}:00 a ${String(settings.hora_cierre).padStart(2, "0")}:00`;

  ranchoMenu.innerHTML = mealIds
    .map((mealId) => {
      const item = menu[mealId];
      const already = ranchoRecordExists(user, item.titulo, date);
      return `
        <article class="meal-card">
          <div>
            <span class="ticket-label">${escapeHTML(item.titulo)}</span>
            <h3>${escapeHTML(item.descripcion)}</h3>
            <p>${formatMoney(item.precio)}</p>
          </div>
          <button class="${already ? "ghost-button" : "primary-button"}" type="button" data-meal="${mealId}" ${already || !open ? "disabled" : ""}>
            ${already ? "Anotado" : "Anotarse"}
          </button>
        </article>
      `;
    })
    .join("");

  const history = getRanchoRecords()
    .filter((record) => record.cedula === user.cedula)
    .slice()
    .reverse()
    .slice(0, 6);

  ranchoHistory.innerHTML = history.length
    ? history.map((record) => `
        <article class="turn-card">
          <div class="turn-main">
            <div>
              <span class="ticket-label">${escapeHTML(formatDate(record.fechaConsumo))}</span>
              <h3>${escapeHTML(record.comida)}</h3>
              <p>${escapeHTML(record.tipo)} · ${formatMoney(record.monto)}</p>
            </div>
            <span class="turn-status confirmado">Registrado</span>
          </div>
        </article>
      `).join("")
    : `<p class="empty-state">Aún no tienes consumos registrados.</p>`;
}

function renderAdmin() {
  renderSystemSettings();
  renderAdminDashboard();
  renderTurns();
  renderRanchoAdmin();
  renderUsers();
  renderRecoveries();
}

function renderAdminDashboard() {
  const today = toISODate(new Date());
  const weekStartDate = new Date();
  weekStartDate.setDate(weekStartDate.getDate() - 6);
  const weekStart = toISODate(weekStartDate);
  const monthStart = `${today.slice(0, 7)}-01`;
  const users = getUsers();
  const turns = getTurns().filter((turn) => turn.status !== "Cancelado");
  const records = getRanchoRecords();
  const expenses = getExpenses();
  const hairIncome = (start, end) => turns
    .filter((turn) => inDateRange(turn.date, start, end))
    .reduce((sum, turn) => sum + Number(turn.amount || haircutPrice), 0);
  const ranchoIncome = (start, end) => records
    .filter((record) => inDateRange(record.fechaConsumo, start, end))
    .reduce((sum, record) => sum + Number(record.monto || 0), 0);
  const expenseTotal = (start, end) => expenses
    .filter((item) => inDateRange(item.date, start, end))
    .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  const monthIncome = hairIncome(monthStart, today) + ranchoIncome(monthStart, today);
  const monthExpenses = expenseTotal(monthStart, today);
  adminIncomeDay.textContent = formatMoney(hairIncome(today, today) + ranchoIncome(today, today));
  adminIncomeWeek.textContent = formatMoney(hairIncome(weekStart, today) + ranchoIncome(weekStart, today));
  adminIncomeMonth.textContent = formatMoney(monthIncome);
  adminUserTotal.textContent = String(users.length);
  adminHairMonth.textContent = formatMoney(hairIncome(monthStart, today));
  adminRanchoMonth.textContent = formatMoney(ranchoIncome(monthStart, today));
  adminExpenseMonth.textContent = formatMoney(monthExpenses);
  adminBalanceMonth.textContent = formatMoney(monthIncome - monthExpenses);
  adminDebtTotal.textContent = formatMoney(users.reduce((sum, user) => sum + Number(user.deuda || 0), 0));
  adminRanchoTomorrow.textContent = String(records.filter((record) => record.fechaConsumo === tomorrowISO()).length);
  adminHairPending.textContent = String(turns.filter((turn) => turn.status === "Pendiente" || turn.status === "Confirmado").length);
  adminRecoveryTotal.textContent = String(getRecoveries().length);
}

function renderSystemSettings() {
  const settings = getSystemSettings();
  ranchoBank.value = settings.banco || "";
  ranchoAccount.value = settings.cuenta || "";
  ranchoOwner.value = settings.titular || "";
  ranchoReference.value = settings.referencia || "";
  ranchoQrText.value = settings.qrText || "";
  renderQr(systemQrPreview, { ...settings, qrImage: pendingSystemQrImage || settings.qrImage });
  systemLogoPreview.src = pendingSystemLogoImage || settings.logoImage || defaultSystemSettings.logoImage;
}

function renderTurns() {
  const query = adminSearch.value.trim().toLowerCase();
  const status = adminStatusFilter.value;
  const turns = getTurns();
  const filteredTurns = turns.filter((turn) => {
    const matchesStatus = status === "all" || turn.status === status;
    const text = `${turn.code} ${displayPerson(turn)} ${turn.personId} ${turn.unit}`.toLowerCase();
    return matchesStatus && text.includes(query);
  });

  statTotal.textContent = String(turns.length);
  statPending.textContent = String(turns.filter((turn) => turn.status === "Pendiente" || turn.status === "Confirmado").length);
  statDone.textContent = String(turns.filter((turn) => turn.status === "Atendido").length);
  renderHairClosedDates();

  if (!filteredTurns.length) {
    turnList.innerHTML = `<p class="empty-state">No hay turnos con esos filtros.</p>`;
    return;
  }

  turnList.innerHTML = filteredTurns
    .map((turn) => `
      <article class="turn-card" data-code="${turn.code}">
        <div class="turn-main">
          <div>
            <span class="ticket-label">${escapeHTML(turn.code)}</span>
            <h3>${escapeHTML(displayPerson(turn))}</h3>
            <p>${escapeHTML(turn.unit)} · ${escapeHTML(turn.personId)} · ${escapeHTML(turn.contact)}</p>
          </div>
          <span class="turn-status ${turn.status.toLowerCase()}">${turn.status}</span>
        </div>
        <div class="turn-grid">
          <label>
            <span>Fecha</span>
            <input data-field="date" type="date" value="${escapeHTML(turn.date)}">
          </label>
          <label>
            <span>Hora</span>
            <select data-field="time">
              ${slots.map((slot) => `<option value="${slot}" ${slot === turn.time ? "selected" : ""}>${slot}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Servicio</span>
            <input type="text" value="Corte militar" disabled>
          </label>
          <label>
            <span>Estado</span>
            <select data-field="status">
              ${["Pendiente", "Confirmado", "Atendido", "Cancelado"].map((item) => `<option value="${item}" ${item === turn.status ? "selected" : ""}>${item}</option>`).join("")}
            </select>
          </label>
        </div>
        <label>
          <span>Observaciones</span>
          <textarea data-field="notes" rows="2">${escapeHTML(turn.notes || "")}</textarea>
        </label>
        <div class="turn-actions">
          <button class="ghost-button" type="button" data-action="save">Guardar cambios</button>
          <button class="danger-button" type="button" data-action="delete">Borrar turno</button>
        </div>
      </article>
    `)
    .join("");
}

function renderHairClosedDates() {
  const items = getHairClosedDates().slice().sort((a, b) => a.date.localeCompare(b.date));
  hairClosedList.innerHTML = items.length
    ? items.map((item) => `
      <article class="turn-card compact-card" data-closed-date="${escapeHTML(item.date)}">
        <div class="turn-main">
          <div>
            <span class="ticket-label">${escapeHTML(formatDate(item.date))}</span>
            <h3>${escapeHTML(item.reason || "Sin atención")}</h3>
          </div>
          <button class="danger-button" type="button" data-closed-action="delete">Habilitar</button>
        </div>
      </article>
    `).join("")
    : `<p class="empty-state compact">No hay fechas bloqueadas.</p>`;
}

function renderUsers() {
  const query = userSearch.value.trim().toLowerCase();
  const role = userRoleFilter.value;
  const users = getUsers();
  const units = getRanchoSettings().repartos || seedRanchoSettings.repartos;
  const filteredUsers = users.filter((user) => {
    const matchesRole = role === "all" || user.role === role;
    const text = `${displayPerson(user)} ${user.cedula} ${user.email}`.toLowerCase();
    return matchesRole && text.includes(query);
  });

  userStatTotal.textContent = String(users.length);
  userStatAdmin.textContent = String(users.filter((user) => user.role === "admin").length);
  userStatRecovery.textContent = String(getRecoveries().length);

  if (!filteredUsers.length) {
    userList.innerHTML = `<p class="empty-state">No hay usuarios con esos filtros.</p>`;
    return;
  }

  userList.innerHTML = filteredUsers
    .map((user) => `
      <article class="turn-card user-card" data-cedula="${escapeHTML(user.cedula)}">
        <div class="turn-main">
          <div>
            <span class="ticket-label">${user.role === "admin" ? "Administrador" : "Solicitante"}</span>
            <h3>${escapeHTML(displayPerson(user))}</h3>
            <p>${escapeHTML(user.cedula)} · ${escapeHTML(user.email || "Sin correo")} · ${escapeHTML(user.reparto || "Ninguno")} · Saldo ${formatMoney(user.saldo)} · Deuda ${formatMoney(user.deuda)}</p>
          </div>
          <span class="turn-status ${user.role === "admin" ? "atendido" : "confirmado"}">${user.role === "admin" ? "Admin" : "Usuario"}</span>
        </div>
        <div class="turn-grid">
          <label>
            <span>Grado</span>
            <select data-user-field="grade">
              ${grades.map((grade) => `<option value="${grade}" ${grade === user.grade ? "selected" : ""}>${grade}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Apellidos</span>
            <input data-user-field="lastName" type="text" value="${escapeHTML(user.lastName || "")}">
          </label>
          <label>
            <span>Nombres</span>
            <input data-user-field="firstName" type="text" value="${escapeHTML(user.firstName || "")}">
          </label>
          <label>
            <span>Cédula</span>
            <input data-user-field="cedula" type="text" inputmode="numeric" value="${escapeHTML(user.cedula)}">
          </label>
          <label>
            <span>Correo</span>
            <input data-user-field="email" type="email" value="${escapeHTML(user.email || "")}">
          </label>
          <label>
            <span>Rol</span>
            <select data-user-field="role">
              <option value="user" ${user.role === "user" ? "selected" : ""}>Solicitante</option>
              <option value="admin" ${user.role === "admin" ? "selected" : ""}>Administrador</option>
            </select>
          </label>
          <label>
            <span>Reparto</span>
            <select data-user-field="reparto">
              ${units.map((unit) => `<option value="${escapeHTML(unit)}" ${unit === user.reparto ? "selected" : ""}>${escapeHTML(unit)}</option>`).join("")}
            </select>
          </label>
          <label>
            <span>Recarga / saldo</span>
            <input data-user-field="saldo" type="number" step="0.01" min="0" value="${Number(user.saldo || 0).toFixed(2)}">
          </label>
          <label>
            <span>Deuda</span>
            <input data-user-field="deuda" type="number" step="0.01" min="0" max="${maxDebt}" value="${Number(user.deuda || 0).toFixed(2)}">
          </label>
        </div>
        <p class="account-note">Al guardar, la recarga se aplica primero a deuda. Solo el excedente queda como saldo.</p>
        <div class="turn-actions">
          <button class="ghost-button" type="button" data-user-action="save">Guardar usuario</button>
          <button class="ghost-button" type="button" data-user-action="reset">Resetear contraseña</button>
          <button class="danger-button" type="button" data-user-action="delete">Borrar usuario</button>
        </div>
      </article>
    `)
    .join("");
}

function renderRecoveries() {
  const recoveries = getRecoveries();
  userStatRecovery.textContent = String(recoveries.length);

  if (!recoveries.length) {
    recoveryList.innerHTML = `<p class="empty-state">Todavía no hay solicitudes de recuperación.</p>`;
    return;
  }

  recoveryList.innerHTML = recoveries
    .slice()
    .reverse()
    .map((item) => `
      <article class="turn-card recovery-card">
        <div class="turn-main">
          <div>
            <span class="ticket-label">${escapeHTML(formatDateTime(item.createdAt))}</span>
            <h3>${escapeHTML(displayPerson(item))}</h3>
            <p>Cédula ${escapeHTML(item.cedula)} · Enviado a ${escapeHTML(maskEmail(item.email))}</p>
          </div>
          <span class="turn-status confirmado">Simulado</span>
        </div>
        <p class="recovery-link">${escapeHTML(item.link)}</p>
      </article>
    `)
    .join("");
}

function showAdminPanel(panelName) {
  adminTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.adminPanel === panelName));
  adminGeneralPanel.classList.toggle("hidden", panelName !== "general");
  adminTurnsPanel.classList.toggle("hidden", panelName !== "turns");
  adminRanchoPanel.classList.toggle("hidden", panelName !== "rancho");
  adminUsersPanel.classList.toggle("hidden", panelName !== "users");
  adminView.querySelector("#admin-title").textContent = {
    general: "Panel general",
    rancho: "Administración de rancho",
    turns: "Administración de peluquería",
    users: "Administración de usuarios"
  }[panelName] || "Panel de control";
  const service = panelName === "general" ? "home" : panelName === "turns" ? "hair" : panelName === "rancho" ? "rancho" : "admin";
  setActiveService(service);
  renderAdmin();
}

function renderRanchoAdmin() {
  const menu = getRanchoMenu();
  const settings = getRanchoSettings();
  const records = getRanchoRecords();
  const users = getUsers();
  const query = ranchoAdminSearch.value.trim().toLowerCase();
  const meal = ranchoMealFilter.value;

  ranchoOpenHour.value = settings.hora_apertura;
  ranchoCloseHour.value = settings.hora_cierre;
  ranchoUnits.value = (settings.repartos || seedRanchoSettings.repartos).join(", ");
  singleRanchoMeal.innerHTML = mealIds.map((mealId) => `<option value="${mealId}">${escapeHTML(menu[mealId].titulo)}</option>`).join("");
  bulkRanchoMeal.innerHTML = mealIds.map((mealId) => `<option value="${mealId}">${escapeHTML(menu[mealId].titulo)}</option>`).join("");
  if (!singleRanchoDate.value) singleRanchoDate.value = tomorrowISO();
  if (!singleRanchoUnit.value) singleRanchoUnit.value = (settings.repartos || seedRanchoSettings.repartos)[0] || "CIDFAE";
  if (!bulkRanchoDate.value) bulkRanchoDate.value = tomorrowISO();
  if (!bulkRanchoUnit.value) bulkRanchoUnit.value = (settings.repartos || seedRanchoSettings.repartos)[0] || "CIDFAE";
  mealIds.forEach((mealId) => {
    document.querySelector(`#menu-${mealId}-desc`).value = menu[mealId].descripcion;
    document.querySelector(`#menu-${mealId}-price`).value = menu[mealId].precio;
  });

  ranchoStatTotal.textContent = String(records.length);
  ranchoStatIncome.textContent = formatMoney(records.reduce((sum, record) => sum + Number(record.monto || 0), 0));
  ranchoStatDebt.textContent = formatMoney(users.reduce((sum, user) => sum + Number(user.deuda || 0), 0));

  const filteredRecords = records.filter((record) => {
    const matchesMeal = meal === "all" || record.comida === meal;
    const text = `${record.persona} ${record.cedula} ${record.comida} ${record.fechaConsumo}`.toLowerCase();
    return matchesMeal && text.includes(query);
  });

  if (!filteredRecords.length) {
    ranchoAdminList.innerHTML = `<p class="empty-state">No hay consumos de rancho con esos filtros.</p>`;
    return;
  }

  ranchoAdminList.innerHTML = filteredRecords
    .slice()
    .reverse()
    .map((record) => `
      <article class="turn-card" data-rancho-id="${record.id}">
        <div class="turn-main">
          <div>
            <span class="ticket-label">${escapeHTML(formatDate(record.fechaConsumo))}</span>
            <h3>${escapeHTML(record.persona)}</h3>
            <p>${escapeHTML(record.comida)} · ${escapeHTML(record.cedula)} · ${formatMoney(record.monto)}</p>
          </div>
          <span class="turn-status confirmado">Consumo</span>
        </div>
        <div class="turn-actions">
          <button class="danger-button" type="button" data-rancho-action="cancel">Cancelar y devolver</button>
        </div>
      </article>
    `)
    .join("");
}

function accountForCedula(cedula) {
  return getUsers().find((user) => normalizeCedula(user.cedula || "") === normalizeCedula(cedula));
}

function repartoForRecord(record, user) {
  if (record?.reparto && record.reparto !== "Ninguno") return record.reparto;
  if (user?.reparto && user.reparto !== "Ninguno") return user.reparto;
  return "Ninguno";
}

function userMovements(user) {
  if (!user) return [];
  const cedula = normalizeCedula(user.cedula || "");
  const hair = getTurns()
    .filter((turn) => normalizeCedula(turn.chargedCedula || turn.personId || "") === cedula && turn.status !== "Cancelado")
    .map((turn) => ({
      date: turn.date,
      type: "Peluquería",
      detail: "Corte militar",
      unit: turn.unit || user.reparto || "Ninguno",
      amount: Number(turn.amount || haircutPrice),
      status: turn.status,
      when: `${formatDate(turn.date)} · ${turn.time}`
    }));
  const rancho = getRanchoRecords()
    .filter((record) => normalizeCedula(record.cedula || "") === cedula)
    .map((record) => ({
      date: record.fechaConsumo,
      type: "Rancho",
      detail: record.comida,
      unit: repartoForRecord(record, user),
      amount: Number(record.monto || 0),
      status: "Registrado",
      when: formatDate(record.fechaConsumo)
    }));
  return [...hair, ...rancho].sort((a, b) => b.date.localeCompare(a.date) || a.type.localeCompare(b.type));
}

function reportHeader(title, date) {
  return `
    <header class="report-header">
      <p>CIDFAE</p>
      <h1 id="report-title">${escapeHTML(title)}</h1>
      <span>Fecha del reporte: ${escapeHTML(formatDate(date))}</span>
    </header>
  `;
}

function reportRange(startInput, endInput, fallbackDate) {
  const start = startInput?.value || fallbackDate;
  const end = endInput?.value || start;
  return { start, end };
}

function inDateRange(date, start, end) {
  return date >= start && date <= end;
}

function showReport(html) {
  reportContent.innerHTML = html;
  reportView.classList.remove("hidden");
}

function generateHairReport() {
  const fallbackDate = nextHairReportDate();
  const { start, end } = reportRange(hairReportStart, hairReportEnd, fallbackDate);
  const turns = getTurns()
    .filter((turn) => inDateRange(turn.date, start, end) && turn.status !== "Cancelado")
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time) || displayPerson(a).localeCompare(displayPerson(b)));

  const rows = turns.map((turn, index) => {
    const user = accountForCedula(turn.chargedCedula || turn.personId);
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHTML(formatDate(turn.date))}</td>
        <td>${escapeHTML(turn.time)}</td>
        <td>${escapeHTML(displayPerson(turn))}</td>
        <td>${escapeHTML(turn.personId)}</td>
        <td>Corte militar</td>
        <td>${formatMoney(turn.amount || haircutPrice)}</td>
        <td>${formatMoney(user?.saldo || 0)}</td>
        <td class="debt-value">${formatMoney(user?.deuda || 0)}</td>
        <td>${escapeHTML(turn.status)}</td>
      </tr>
    `;
  }).join("");

  showReport(`
    ${reportHeader(`Reporte de corte de cabello (${formatDate(start)} - ${formatDate(end)})`, toISODate(new Date()))}
    <section class="report-summary">
      <div><span>Total turnos</span><strong>${turns.length}</strong></div>
      <div><span>Confirmados</span><strong>${turns.filter((turn) => turn.status === "Confirmado").length}</strong></div>
      <div><span>Valor total</span><strong>${formatMoney(turns.reduce((sum, turn) => sum + Number(turn.amount || haircutPrice), 0))}</strong></div>
    </section>
    <table class="report-table">
      <thead>
        <tr>
          <th>#</th><th>Fecha</th><th>Hora</th><th>Grado Apellidos Nombres</th><th>Cédula</th><th>Tipo</th><th>Valor</th><th>Saldo</th><th>Deuda</th><th>Estado</th>
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="10">No hay turnos registrados en el rango seleccionado.</td></tr>`}</tbody>
    </table>
  `);
}

function generateRanchoReport() {
  const fallbackDate = tomorrowISO();
  const { start, end } = reportRange(ranchoReportStart, ranchoReportEnd, fallbackDate);
  const records = getRanchoRecords()
    .filter((record) => inDateRange(record.fechaConsumo, start, end))
    .sort((a, b) => a.fechaConsumo.localeCompare(b.fechaConsumo) || a.comida.localeCompare(b.comida) || a.persona.localeCompare(b.persona));
  const totals = ["Desayuno", "Almuerzo", "Merienda"].map((meal) => ({
    meal,
    count: records.filter((record) => record.comida === meal).length
  }));

  const rows = records.map((record, index) => {
    const user = accountForCedula(record.cedula);
    return `
      <tr>
        <td>${index + 1}</td>
        <td>${escapeHTML(formatDate(record.fechaConsumo))}</td>
        <td>${escapeHTML(record.comida)}</td>
        <td>${escapeHTML(record.persona)}</td>
        <td>${escapeHTML(record.cedula)}</td>
        <td>${escapeHTML(repartoForRecord(record, user))}</td>
        <td>${formatMoney(record.monto)}</td>
        <td>${formatMoney(user?.saldo || 0)}</td>
        <td class="debt-value">${formatMoney(user?.deuda || 0)}</td>
      </tr>
    `;
  }).join("");

  showReport(`
    ${reportHeader(`Reporte de rancho (${formatDate(start)} - ${formatDate(end)})`, toISODate(new Date()))}
    <section class="report-summary">
      ${totals.map((item) => `<div><span>${item.meal}</span><strong>${item.count}</strong></div>`).join("")}
      <div><span>Total raciones</span><strong>${records.length}</strong></div>
      <div><span>Total valores</span><strong>${formatMoney(records.reduce((sum, record) => sum + Number(record.monto || 0), 0))}</strong></div>
    </section>
    <table class="report-table">
      <thead>
        <tr>
          <th>#</th><th>Fecha</th><th>Comida</th><th>Grado Apellidos Nombres</th><th>Cédula</th><th>Reparto</th><th>Valor</th><th>Saldo</th><th>Deuda</th>
        </tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="9">No hay personal anotado en el rango seleccionado.</td></tr>`}</tbody>
    </table>
  `);
}

function generateUserReport() {
  const user = currentUser();
  if (!user) return;
  const movements = userMovements(user);
  const rows = movements.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHTML(item.when)}</td>
      <td>${escapeHTML(item.type)}</td>
      <td>${escapeHTML(item.detail)}</td>
      <td>${escapeHTML(item.unit || "Ninguno")}</td>
      <td>${formatMoney(item.amount)}</td>
      <td>${escapeHTML(item.status)}</td>
    </tr>
  `).join("");

  showReport(`
    ${reportHeader(`Reporte de cuenta - ${displayPerson(user)}`, toISODate(new Date()))}
    <section class="report-summary">
      <div><span>Saldo actual</span><strong>${formatMoney(user.saldo)}</strong></div>
      <div><span>Deuda actual</span><strong class="debt-value">${formatMoney(user.deuda)}</strong></div>
      <div><span>Movimientos</span><strong>${movements.length}</strong></div>
      <div><span>Cédula</span><strong>${escapeHTML(user.cedula)}</strong></div>
      <div><span>Reparto</span><strong>${escapeHTML(user.reparto || "Ninguno")}</strong></div>
    </section>
    <table class="report-table">
      <thead>
        <tr><th>#</th><th>Fecha / hora</th><th>Servicio</th><th>Detalle</th><th>Reparto / unidad</th><th>Valor</th><th>Estado</th></tr>
      </thead>
      <tbody>${rows || `<tr><td colspan="7">No existen movimientos registrados.</td></tr>`}</tbody>
    </table>
  `);
}





authTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAuthPanel(tab.dataset.authView));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readFormData(loginForm);
  const cedula = normalizeCedula(data.cedula);
  const user = getUsers().find((item) => normalizeCedula(item.cedula || "") === cedula && item.password === data.password);
  if (!user) {
    authMessage.textContent = "Credenciales incorrectas.";
    authMessage.className = "auth-message error";
    return;
  }
  setSession(user);
  showApp(user);
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readFormData(registerForm);
  const users = getUsers();
  const cedula = normalizeCedula(data.cedula);
  const email = normalizeEmail(data.email);
  if (users.some((user) => normalizeCedula(user.cedula || "") === cedula)) {
    authMessage.textContent = "Esa cédula ya está registrada.";
    authMessage.className = "auth-message error";
    return;
  }
  if (users.some((user) => normalizeEmail(user.email || "") === email)) {
    authMessage.textContent = "Ese correo ya está registrado para recuperación.";
    authMessage.className = "auth-message error";
    return;
  }
  users.push({
    grade: data.grade,
    lastName: data.lastName.trim(),
    firstName: data.firstName.trim(),
    cedula,
    email,
    password: data.password,
    role: "user",
    saldo: 0,
    deuda: 0,
    reparto: "CIDFAE"
  });
  saveUsers(users);
  showAuthPanel("login");
  authMessage.textContent = "Cuenta creada. Ya puedes ingresar.";
  authMessage.className = "auth-message success";
  registerForm.reset();
});

recoverForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = readFormData(recoverForm);
  const cedula = normalizeCedula(data.cedula);
  const user = getUsers().find((item) => normalizeCedula(item.cedula || "") === cedula);
  if (!user) {
    authMessage.textContent = "No encontramos una cuenta con esa cédula.";
    authMessage.className = "auth-message error";
    return;
  }

  const token = Math.floor(100000 + Math.random() * 900000);
  const recoveries = getRecoveries();
  recoveries.push({
    cedula: user.cedula,
    email: user.email,
    grade: user.grade,
    lastName: user.lastName,
    firstName: user.firstName,
    createdAt: new Date().toISOString(),
    link: `https://cidfae.local/recuperar?cedula=${user.cedula}&codigo=${token}`
  });
  saveRecoveries(recoveries);
  authMessage.textContent = `Enlace de recuperación enviado a ${maskEmail(user.email || "")}. En este prototipo queda en la bandeja simulada del administrador.`;
  authMessage.className = "auth-message success";
});

logoutButton.addEventListener("click", () => {
  clearSession();
  showLogin();
});

homeNav.addEventListener("click", () => {
  const session = getSession();
  if (session?.role === "admin") {
    setActiveService("home");
    showAdminPanel("general");
    return;
  }
  showHome();
});
homeHairAction.addEventListener("click", showBooking);
homeRanchoAction.addEventListener("click", showRancho);
hairNav.addEventListener("click", () => {
  const session = getSession();
  if (session?.role === "admin") {
    setActiveService("hair");
    showAdminPanel("turns");
    return;
  }
  showBooking();
});
ranchoNav.addEventListener("click", () => {
  const session = getSession();
  if (session?.role === "admin") {
    setActiveService("rancho");
    showAdminPanel("rancho");
    return;
  }
  showRancho();
});
adminNav.addEventListener("click", () => {
  setActiveService("admin");
  showAdminPanel("users");
});
adminTabs.forEach((tab) => {
  tab.addEventListener("click", () => showAdminPanel(tab.dataset.adminPanel));
});
adminSearch.addEventListener("input", renderAdmin);
adminStatusFilter.addEventListener("change", renderAdmin);
userSearch.addEventListener("input", renderAdmin);
userRoleFilter.addEventListener("change", renderAdmin);
ranchoAdminSearch.addEventListener("input", renderAdmin);
ranchoMealFilter.addEventListener("change", renderAdmin);
hairReportButton.addEventListener("click", generateHairReport);
ranchoReportButton.addEventListener("click", generateRanchoReport);
userReportButton.addEventListener("click", generateUserReport);
closeReport.addEventListener("click", () => reportView.classList.add("hidden"));
printReport.addEventListener("click", () => window.print());

ranchoUnitSelect.addEventListener("change", () => {
  updateCurrentUserReparto(ranchoUnitSelect.value);
  renderRancho();
});

homeUnit.addEventListener("change", () => {
  updateCurrentUserReparto(homeUnit.value);
});

ranchoMenu.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-meal]");
  if (!button) return;

  const user = currentUser();
  if (!user) return;

  const settings = getRanchoSettings();
  if (!serviceOpen(settings)) {
    window.alert("El servicio de rancho se encuentra cerrado.");
    return;
  }

  const menu = getRanchoMenu();
  const item = menu[button.dataset.meal];
  const fechaConsumo = tomorrowISO();
  if (ranchoRecordExists(user, item.titulo, fechaConsumo)) {
    window.alert(`Ya estás anotado para ${item.titulo} mañana.`);
    return;
  }

  if (!applyAccountCharge(user, Number(item.precio))) return;
  const records = getRanchoRecords();
  records.push({
    id: `RAN-${Date.now()}`,
    cedula: user.cedula,
    persona: displayPerson(user),
    reparto: user.reparto || "Ninguno",
    tipo: "consumo",
    comida: item.titulo,
    monto: Number(item.precio),
    fechaRegistro: new Date().toISOString(),
    fechaConsumo
  });
  saveRanchoRecords(records);
  renderRancho();
});

saveRanchoSettingsButton.addEventListener("click", () => {
  const menu = getRanchoMenu();
  mealIds.forEach((mealId) => {
    menu[mealId].descripcion = document.querySelector(`#menu-${mealId}-desc`).value.trim();
    menu[mealId].precio = Number(document.querySelector(`#menu-${mealId}-price`).value || 0);
  });
  saveRanchoMenu(menu);
  saveRanchoSettingsData({
    ...getRanchoSettings(),
    hora_apertura: Number(ranchoOpenHour.value || 8),
    hora_cierre: Number(ranchoCloseHour.value || 16),
    repartos: ranchoUnits.value.split(",").map((unit) => unit.trim()).filter(Boolean)
  });
  renderAdmin();
  updateSessionAccount();
});

saveSystemSettingsButton.addEventListener("click", () => {
  try {
    saveSystemSettings({
      ...getSystemSettings(),
      banco: ranchoBank.value.trim(),
      cuenta: ranchoAccount.value.trim(),
      titular: ranchoOwner.value.trim(),
      referencia: ranchoReference.value.trim(),
      qrText: ranchoQrText.value.trim(),
      ...(pendingSystemQrImage ? { qrImage: pendingSystemQrImage } : {}),
      ...(pendingSystemLogoImage ? { logoImage: pendingSystemLogoImage } : {})
    });
    pendingSystemQrImage = "";
    pendingSystemLogoImage = "";
    ranchoQrFile.value = "";
    systemLogoFile.value = "";
    applySystemLogo();
    updateSessionAccount();
    renderAdmin();
    showSystemSettingsMessage("Se realizaron los cambios correctamente.");
  } catch (error) {
    showSystemSettingsMessage("No se pudo guardar. Intente con una imagen mas liviana.", "error");
  }
});

ranchoQrFile.addEventListener("change", () => {
  const file = ranchoQrFile.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingSystemQrImage = reader.result;
    renderQr(systemQrPreview, { ...getSystemSettings(), qrImage: pendingSystemQrImage });
    showSystemSettingsMessage("QR cargado. Presione Guardar configuracion general para aplicar.");
  });
  reader.readAsDataURL(file);
});

systemLogoFile.addEventListener("change", () => {
  const file = systemLogoFile.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    pendingSystemLogoImage = reader.result;
    systemLogoPreview.src = pendingSystemLogoImage;
    showSystemSettingsMessage("Imagen institucional cargada. Presione Guardar configuracion general para aplicar.");
  });
  reader.readAsDataURL(file);
});

resetSystemLogoButton.addEventListener("click", () => {
  saveSystemSettings({
    ...getSystemSettings(),
    logoImage: defaultSystemSettings.logoImage
  });
  pendingSystemLogoImage = "";
  systemLogoFile.value = "";
  applySystemLogo();
  renderSystemSettings();
  showSystemSettingsMessage("Imagen institucional restaurada.");
});

adminExpenseCreate.addEventListener("click", () => {
  const amount = Number(adminExpenseAmount.value || 0);
  if (!adminExpenseDate.value || amount <= 0) {
    window.alert("Ingrese fecha y valor del egreso.");
    return;
  }
  const expenses = getExpenses();
  expenses.push({
    id: `EGR-${Date.now()}`,
    date: adminExpenseDate.value,
    service: adminExpenseService.value,
    concept: adminExpenseConcept.value.trim() || "Egreso administrativo",
    amount
  });
  saveExpenses(expenses);
  adminExpenseConcept.value = "";
  adminExpenseAmount.value = "";
  renderAdmin();
});

addHairClosedDate.addEventListener("click", () => {
  if (!hairClosedDate.value) return;
  const items = getHairClosedDates().filter((item) => item.date !== hairClosedDate.value);
  items.push({ date: hairClosedDate.value, reason: hairClosedReason.value.trim() || "Sin atención" });
  saveHairClosedDates(items);
  hairClosedReason.value = "";
  renderAdmin();
  renderSlots();
});

hairClosedList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-closed-action]");
  const card = event.target.closest("[data-closed-date]");
  if (!button || !card) return;
  saveHairClosedDates(getHairClosedDates().filter((item) => item.date !== card.dataset.closedDate));
  renderAdmin();
  renderSlots();
});

singleRanchoCreate.addEventListener("click", () => {
  const menu = getRanchoMenu();
  const item = menu[singleRanchoMeal.value];
  const cedula = singleRanchoCedula.value.trim();
  const existingUser = accountForCedula(cedula);
  if (existingUser && !applyAccountCharge(existingUser, Number(item.precio))) return;
  const person = existingUser || {
    grade: singleRanchoGrade.value,
    lastName: singleRanchoLastName.value.trim() || "SIN APELLIDOS",
    firstName: singleRanchoFirstName.value.trim() || "SIN NOMBRES",
    cedula: cedula || `EXT-${Date.now()}`
  };
  const records = getRanchoRecords();
  records.push({
    id: `RAN-ADM-${Date.now()}`,
    cedula: person.cedula,
    persona: displayPerson(person),
    reparto: singleRanchoUnit.value.trim() || existingUser?.reparto || "Sin reparto",
    tipo: existingUser ? "consumo admin" : "externo admin",
    comida: item.titulo,
    monto: Number(item.precio),
    fechaRegistro: new Date().toISOString(),
    fechaConsumo: singleRanchoDate.value || tomorrowISO()
  });
  saveRanchoRecords(records);
  singleRanchoLastName.value = "";
  singleRanchoFirstName.value = "";
  singleRanchoCedula.value = "";
  renderAdmin();
});

adminHairCreate.addEventListener("click", () => {
  const date = adminHairDate.value;
  const closed = hairClosedFor(date);
  if (!date || closed) {
    window.alert(closed ? `No hay atención ese día: ${closed.reason}` : "Seleccione una fecha.");
    return;
  }
  const booked = bookedTimesFor(date);
  const freeSlots = slots.filter((slot) => !booked.includes(slot));
  const quantity = Math.max(1, Number(adminHairQty.value || 1));
  if (freeSlots.length < quantity) {
    window.alert(`Solo hay ${freeSlots.length} horario(s) disponible(s) para esa fecha.`);
    return;
  }
  const turns = getTurns();
  Array.from({ length: quantity }).forEach((_, index) => {
    const suffix = quantity > 1 ? ` ${String(index + 1).padStart(2, "0")}` : "";
    turns.push({
      code: createCodeFrom(turns),
      grade: adminHairGrade.value,
      lastName: `${adminHairLastName.value.trim() || "COMISION"}${suffix}`,
      firstName: adminHairFirstName.value.trim() || "PERSONAL",
      personId: adminHairCedula.value.trim() || `EXT-${Date.now()}-${index + 1}`,
      unit: adminHairUnit.value.trim() || "Sin unidad",
      contact: adminHairContact.value.trim() || "N/A",
      date,
      time: freeSlots[index],
      cutType: "Militar",
      notes: "Turno creado por administrador.",
      status: "Confirmado",
      amount: haircutPrice,
      chargedCedula: adminHairCedula.value.trim() || ""
    });
  });
  saveTurns(turns);
  adminHairQty.value = "1";
  renderAdmin();
  renderSlots();
});

bulkRanchoCreate.addEventListener("click", () => {
  const menu = getRanchoMenu();
  const item = menu[bulkRanchoMeal.value];
  const quantity = Math.max(1, Number(bulkRanchoQty.value || 1));
  const date = bulkRanchoDate.value || tomorrowISO();
  const unit = bulkRanchoUnit.value.trim() || "Sin reparto";
  const person = bulkRanchoPerson.value.trim() || `Comisión ${unit}`;
  const records = getRanchoRecords();
  Array.from({ length: quantity }).forEach((_, index) => {
    const count = String(index + 1).padStart(2, "0");
    records.push({
      id: `RAN-MAS-${Date.now()}-${index}`,
      cedula: `MAS-${date}-${unit}-${count}`,
      persona: `${person} ${count}`,
      reparto: unit,
      tipo: "masivo",
      comida: item.titulo,
      monto: Number(item.precio),
      fechaRegistro: new Date().toISOString(),
      fechaConsumo: date
    });
  });
  saveRanchoRecords(records);
  bulkRanchoQty.value = "1";
  renderAdmin();
});

ranchoAdminList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-rancho-action]");
  const card = event.target.closest("[data-rancho-id]");
  if (!button || !card) return;

  const records = getRanchoRecords();
  const record = records.find((item) => item.id === card.dataset.ranchoId);
  if (!record) return;

  refundAccountCharge(record.cedula, record.monto);
  saveRanchoRecords(records.filter((item) => item.id !== record.id));
  renderAdmin();
  if (!ranchoView.classList.contains("hidden")) renderRancho();
});

turnList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".turn-card");
  if (!button || !card) return;

  const code = card.dataset.code;
  let turns = getTurns();

  if (button.dataset.action === "delete") {
    const turn = turns.find((item) => item.code === code);
    if (turn) refundAccountCharge(turn.chargedCedula || turn.personId, turn.amount || haircutPrice);
    turns = turns.filter((turn) => turn.code !== code);
    saveTurns(turns);
    renderAdmin();
    renderSlots();
    return;
  }

  const turn = turns.find((item) => item.code === code);
  if (!turn) return;
  card.querySelectorAll("[data-field]").forEach((field) => {
    turn[field.dataset.field] = field.value;
  });
  saveTurns(turns);
  renderAdmin();
  renderSlots();
});

userList.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  const card = event.target.closest(".user-card");
  if (!button || !card) return;

  const originalCedula = card.dataset.cedula;
  const action = button.dataset.userAction;
  let users = getUsers();
  const user = users.find((item) => normalizeCedula(item.cedula || "") === normalizeCedula(originalCedula));
  if (!user) return;

  const adminCount = users.filter((item) => item.role === "admin").length;
  const session = getSession();
  const isCurrentSession = session && normalizeCedula(session.cedula || "") === normalizeCedula(originalCedula);
  if (action === "delete") {
    if (isCurrentSession) {
      window.alert("No puedes borrar la cuenta con la sesión abierta.");
      return;
    }
    if (user.role === "admin" && adminCount <= 1) {
      window.alert("No se puede borrar el único administrador.");
      return;
    }
    users = users.filter((item) => normalizeCedula(item.cedula || "") !== normalizeCedula(originalCedula));
    saveUsers(users);
    renderAdmin();
    return;
  }

  if (action === "reset") {
    user.password = "Cambio123";
    saveUsers(users);
    window.alert(`Contraseña temporal para ${displayPerson(user)}: Cambio123`);
    renderAdmin();
    return;
  }

  const nextUser = {};
  card.querySelectorAll("[data-user-field]").forEach((field) => {
    nextUser[field.dataset.userField] = field.value.trim();
  });
  nextUser.cedula = normalizeCedula(nextUser.cedula);
  nextUser.email = normalizeEmail(nextUser.email);

  const duplicatedCedula = users.some((item) => normalizeCedula(item.cedula || "") === nextUser.cedula && normalizeCedula(item.cedula || "") !== normalizeCedula(originalCedula));
  const duplicatedEmail = users.some((item) => normalizeEmail(item.email || "") === nextUser.email && normalizeCedula(item.cedula || "") !== normalizeCedula(originalCedula));
  if (!nextUser.grade || !nextUser.lastName || !nextUser.firstName || !nextUser.cedula || !nextUser.email.includes("@")) {
    window.alert("Revisa grado, apellidos, nombres, cédula y correo del usuario.");
    return;
  }
  if (duplicatedCedula || duplicatedEmail) {
    window.alert(duplicatedCedula ? "Ya existe un usuario con esa cédula." : "Ya existe un usuario con ese correo.");
    return;
  }
  if (Number(nextUser.deuda || 0) > maxDebt) {
    window.alert(`La deuda maxima permitida es ${formatMoney(maxDebt)}.`);
    return;
  }

  if (user.role === "admin" && nextUser.role !== "admin" && adminCount <= 1) {
    window.alert("Debe existir al menos un administrador.");
    return;
  }

  user.grade = nextUser.grade;
  user.lastName = nextUser.lastName;
  user.firstName = nextUser.firstName;
  user.cedula = nextUser.cedula;
  user.email = nextUser.email;
  user.role = nextUser.role;
  user.reparto = nextUser.reparto || "Ninguno";
  user.saldo = Number(nextUser.saldo || 0);
  user.deuda = Number(nextUser.deuda || 0);
  settleAccount(user);
  saveUsers(users);

  if (isCurrentSession) {
    setSession(user);
    sessionName.textContent = displayPerson(user);
    sessionRole.textContent = user.role === "admin" ? "Administrador" : "Solicitante";
    updateSessionAccount();
    setSidebarForRole(user);
    if (user.role !== "admin") showBooking();
  }
  renderAdmin();
});

form.addEventListener("input", syncTicket);
form.addEventListener("change", (event) => {
  if (event.target === dateInput) {
    renderSlots();
    return;
  }
  syncTicket();
});

form.addEventListener("reset", () => {
  window.setTimeout(() => {
    initializeDate();
    renderSlots();
  ticketCode.textContent = "CID-000";
  ticketMessage.textContent = "El corte militar se descuenta de su saldo general.";
  ticketMessage.classList.remove("confirmed");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const code = createCode();
  const data = readFormData(form);
  const user = currentUser();
  if (user && !applyAccountCharge(user, haircutPrice)) return;
  const turn = {
    code,
    grade: data.grade,
    lastName: data.lastName.trim(),
    firstName: data.firstName.trim(),
    personId: data.personId.trim(),
    unit: data.unit.trim(),
    contact: data.contact.trim(),
    date: data.date,
    time: data.time,
    cutType: "Militar",
    notes: data.notes.trim(),
    status: "Confirmado",
    amount: haircutPrice,
    chargedCedula: user?.cedula || data.personId.trim()
  };

  const turns = getTurns();
  turns.push(turn);
  saveTurns(turns);

  ticketCode.textContent = code;
  ticketMessage.textContent = `Turno confirmado. Se cargó ${formatMoney(haircutPrice)} a su cuenta general.`;
  ticketMessage.classList.add("confirmed");
  renderSlots();
  ticketName.textContent = displayPerson(turn);
  syncTicket();
});

initializeData();
applySystemLogo();
initializeDate();
renderSlots();

const activeSession = getSession();
if (activeSession) {
  showApp(activeSession);
} else {
  showLogin();
}
