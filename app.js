<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>CIDFAE Turnos | Corte de cabello</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <section id="auth-screen" class="auth-screen" aria-labelledby="auth-title">
      <div class="auth-card" data-auth-mode="login">
        <div class="brand auth-brand">
          <img class="brand-seal" src="assets/sello-logistica-cidfae.png" alt="Sello Departamento de Logística CIDFAE">
          <div>
            <h1 id="auth-title">Bienvenido</h1>
            <p class="auth-subtitle">Ingresa tus credenciales para continuar</p>
          </div>
        </div>

        <div class="auth-tabs" role="tablist" aria-label="Acceso al sistema">
          <button class="auth-tab active" type="button" data-auth-view="login">Ingresar</button>
          <button class="auth-tab" type="button" data-auth-view="register">Registrarse</button>
          <button class="auth-tab" type="button" data-auth-view="recover">Olvidé contraseña</button>
        </div>

        <form id="login-form" class="auth-form" data-auth-panel="login">
          <label>
            <span>Número de cédula</span>
            <input name="cedula" type="text" inputmode="numeric" autocomplete="username" placeholder="1720000000" required>
          </label>
          <label>
            <span>Contraseña</span>
            <input name="password" type="password" autocomplete="current-password" placeholder="Ingrese su contraseña" required>
          </label>
          <button class="primary-button" type="submit">Ingresar</button>
          <p class="auth-hint">Usuario: 1720000000 / usuario123</p>
          <p class="auth-hint">Administrador: 1700000001 / admin123</p>
        </form>

        <form id="register-form" class="auth-form hidden" data-auth-panel="register">
          <label>
            <span>Grado</span>
            <select name="grade" required>
              <option value="">Seleccione</option>
              <option value="Soldado">Soldado</option>
              <option value="Cabo Segundo">Cabo Segundo</option>
              <option value="Cabo Primero">Cabo Primero</option>
              <option value="Sargento Segundo">Sargento Segundo</option>
              <option value="Sargento Primero">Sargento Primero</option>
              <option value="Suboficial Segundo">Suboficial Segundo</option>
              <option value="Suboficial Primero">Suboficial Primero</option>
              <option value="Subteniente">Subteniente</option>
              <option value="Teniente">Teniente</option>
              <option value="Capitán">Capitán</option>
              <option value="Mayor">Mayor</option>
              <option value="Teniente Coronel">Teniente Coronel</option>
              <option value="Coronel">Coronel</option>
            </select>
          </label>
          <label>
            <span>Apellidos</span>
            <input name="lastName" type="text" autocomplete="family-name" required>
          </label>
          <label>
            <span>Nombres</span>
            <input name="firstName" type="text" autocomplete="given-name" required>
          </label>
          <label>
            <span>Número de cédula</span>
            <input name="cedula" type="text" inputmode="numeric" autocomplete="username" required>
          </label>
          <label>
            <span>Correo para recuperación</span>
            <input name="email" type="email" autocomplete="email" placeholder="nombre@correo.com" required>
          </label>
          <label>
            <span>Contraseña</span>
            <input name="password" type="password" autocomplete="new-password" minlength="6" required>
          </label>
          <button class="primary-button" type="submit">Crear cuenta</button>
        </form>

        <form id="recover-form" class="auth-form hidden" data-auth-panel="recover">
          <label>
            <span>Cédula registrada</span>
            <input name="cedula" type="text" inputmode="numeric" autocomplete="username" required>
          </label>
          <p class="auth-hint">En producción se enviará al correo registrado. En este prototipo se guarda en la bandeja simulada del administrador.</p>
          <button class="primary-button" type="submit">Enviar recuperación</button>
        </form>

        <p id="auth-message" class="auth-message" aria-live="polite"></p>
        <p class="developer-credit">Designed by Tnte. Riera César</p>
      </div>
    </section>

    <main id="app-shell" class="app-shell hidden">
      <aside class="sidebar" aria-label="Servicios CIDFAE">
        <div class="brand">
          <img class="brand-seal" src="assets/sello-logistica-cidfae.png" alt="Sello Departamento de Logística CIDFAE">
          <div>
            <p class="eyebrow">CIDFAE</p>
            <h1>Turnos de servicios</h1>
          </div>
        </div>

        <nav class="service-list" aria-label="Lista de servicios">
          <button id="home-nav" class="service-item active" type="button">
            <span class="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 11 12 4l8 7M6 10v10h12V10M10 20v-6h4v6"/></svg>
            </span>
            <span>
              <strong>Inicio</strong>
              <small>Cuenta y pagos</small>
            </span>
          </button>
          <button id="hair-nav" class="service-item" type="button">
            <span class="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M6.5 4.5 19 17M6.5 17 19 4.5M8.5 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm0 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/></svg>
            </span>
            <span>
              <strong>Corte de cabello</strong>
              <small>Reserva activa</small>
            </span>
          </button>
          <button id="rancho-nav" class="service-item" type="button">
            <span class="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 3v8a4 4 0 0 0 4 4h1v6M4 7h5M15 3v18M15 3c3 2 5 5 5 9 0 2-2 3-5 3"/></svg>
            </span>
            <span>
              <strong>Rancho</strong>
              <small>Alimentación</small>
            </span>
          </button>
          <button id="admin-nav" class="service-item hidden" type="button">
            <span class="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M4 7h16M7 7v13M17 7v13M9 4h6l1 3H8l1-3Zm-3 16h12"/></svg>
            </span>
            <span>
              <strong>Administrar</strong>
              <small>Panel del administrador</small>
            </span>
          </button>
          <button class="service-item muted" type="button" disabled>
            <span class="service-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 7h8M8 12h8M8 17h5M6 3h12a2 2 0 0 1 2 2v16l-4-2-4 2-4-2-4 2V5a2 2 0 0 1 2-2Z"/></svg>
            </span>
            <span>
              <strong>Otros servicios</strong>
              <small>Próximamente</small>
            </span>
          </button>
        </nav>

        <section class="info-panel" aria-label="Informacion del punto de atencion">
          <p class="panel-title">Sesión activa</p>
          <p id="session-name">Usuario CIDFAE</p>
          <p id="session-role">Solicitante</p>
          <p id="session-balance">Saldo: $0.00</p>
          <p id="session-debt">Deuda: $0.00</p>
          <p class="developer-credit compact">Designed by Tnte. Riera César</p>
        </section>

        <button id="logout-button" class="logout-button" type="button">Cerrar sesión</button>
      </aside>

      <section id="home-view" class="booking" aria-labelledby="home-title">
        <header class="booking-header">
          <div>
            <p class="eyebrow">Mi cuenta</p>
            <h2 id="home-title">Resumen general</h2>
          </div>
          <div class="status-pill">
            <span aria-hidden="true"></span>
            Servicios activos
          </div>
        </header>

        <section class="summary-strip" aria-label="Resumen de cuenta">
          <div>
            <span>Saldo disponible</span>
            <strong id="home-balance">$0.00</strong>
          </div>
          <div>
            <span>Deuda pendiente</span>
            <strong id="home-debt">$0.00</strong>
          </div>
          <div>
            <span>Reparto</span>
            <select id="home-unit" aria-label="Seleccionar reparto"></select>
          </div>
        </section>

        <section class="form-section">
          <div class="section-heading">
            <h3>Realizar transferencia</h3>
            <span>Recarga de saldo</span>
          </div>
          <div class="payment-layout">
            <div class="transfer-grid">
              <div>
                <span>Banco</span>
                <strong id="home-transfer-bank">Banco</strong>
              </div>
              <div>
                <span>Cuenta</span>
                <strong id="home-transfer-account">0000000000</strong>
              </div>
              <div>
                <span>Titular</span>
                <strong id="home-transfer-owner">CIDFAE</strong>
              </div>
              <div>
                <span>Referencia</span>
                <strong id="home-transfer-reference">Cédula</strong>
              </div>
            </div>
            <div id="home-transfer-qr" class="qr-box large" aria-label="QR para transferencia">QR</div>
          </div>
        </section>

        <section class="service-actions" aria-label="Servicios disponibles">
          <button id="home-hair-action" class="service-action" type="button">
            <strong>Corte de cabello</strong>
            <span>Reservar corte militar</span>
          </button>
          <button id="home-rancho-action" class="service-action" type="button">
            <strong>Rancho</strong>
            <span>Anotarse para alimentación</span>
          </button>
        </section>
      </section>

      <section id="booking-view" class="booking" aria-labelledby="booking-title">
        <header class="booking-header">
          <div>
            <p class="eyebrow">Nuevo turno</p>
            <h2 id="booking-title">Corte de cabello</h2>
          </div>
          <div class="status-pill">
            <span aria-hidden="true"></span>
            Disponible hoy
          </div>
        </header>

        <section class="summary-strip" aria-label="Resumen del servicio">
          <div>
            <span>Duración</span>
            <strong>25 min</strong>
          </div>
          <div>
            <span>Costo</span>
            <strong>$2.50</strong>
          </div>
          <div>
            <span>Turnos por hora</span>
            <strong>2</strong>
          </div>
        </section>

        <form id="booking-form" class="booking-form">
          <section class="form-section">
            <div class="section-heading">
              <h3>Datos del solicitante</h3>
              <span>Paso 1</span>
            </div>

            <div class="field-grid">
              <label>
                <span>Grado</span>
                <select id="grade" name="grade" required>
                  <option value="">Seleccione</option>
                  <option value="Soldado">Soldado</option>
                  <option value="Cabo Segundo">Cabo Segundo</option>
                  <option value="Cabo Primero">Cabo Primero</option>
                  <option value="Sargento Segundo">Sargento Segundo</option>
                  <option value="Sargento Primero">Sargento Primero</option>
                  <option value="Suboficial Segundo">Suboficial Segundo</option>
                  <option value="Suboficial Primero">Suboficial Primero</option>
                  <option value="Subteniente">Subteniente</option>
                  <option value="Teniente">Teniente</option>
                  <option value="Capitán">Capitán</option>
                  <option value="Mayor">Mayor</option>
                  <option value="Teniente Coronel">Teniente Coronel</option>
                  <option value="Coronel">Coronel</option>
                </select>
              </label>
              <label>
                <span>Apellidos</span>
                <input id="last-name" name="lastName" type="text" autocomplete="family-name" placeholder="Ej. Pérez Andrade" required>
              </label>
              <label>
                <span>Nombres</span>
                <input id="first-name" name="firstName" type="text" autocomplete="given-name" placeholder="Ej. Juan Carlos" required>
              </label>
              <label>
                <span>Cédula o código</span>
                <input id="person-id" name="personId" type="text" inputmode="numeric" placeholder="Ej. 1720000000" required>
              </label>
              <label>
                <span>Unidad o dependencia</span>
                <input id="unit" name="unit" type="text" placeholder="Ej. Logistica" required>
              </label>
              <label>
                <span>Contacto</span>
                <input id="contact" name="contact" type="tel" inputmode="tel" placeholder="Ej. 0999999999" required>
              </label>
            </div>
          </section>

          <section class="form-section">
            <div class="section-heading">
              <h3>Fecha y hora</h3>
              <span>Paso 2</span>
            </div>

            <div class="schedule-grid">
              <label class="date-field">
                <span>Fecha</span>
                <input id="date" name="date" type="date" required>
              </label>

              <fieldset class="time-field">
                <legend>Horarios disponibles</legend>
                <div id="time-slots" class="time-slots" aria-live="polite"></div>
              </fieldset>
            </div>
          </section>

          <section class="form-section">
            <div class="section-heading">
              <h3>Observaciones</h3>
              <span>Paso 3</span>
            </div>
            <label>
              <span>Observaciones</span>
              <textarea name="notes" rows="3" placeholder="Opcional"></textarea>
            </label>
          </section>

          <footer class="actions">
            <button class="ghost-button" type="reset">Limpiar</button>
            <button class="primary-button" type="submit">Confirmar turno</button>
          </footer>
        </form>
      </section>

      <section id="rancho-view" class="booking hidden" aria-labelledby="rancho-title">
        <header class="booking-header">
          <div>
            <p class="eyebrow">Servicio de alimentación</p>
            <h2 id="rancho-title">Rancho</h2>
          </div>
          <div id="rancho-status" class="status-pill">
            <span aria-hidden="true"></span>
            Servicio abierto
          </div>
        </header>

        <section class="summary-strip" aria-label="Resumen del rancho">
          <div>
            <span>Reparto</span>
            <select id="rancho-unit-select" aria-label="Seleccionar reparto"></select>
          </div>
          <div>
            <span>Horario</span>
            <strong id="rancho-hours-card">08:00 a 16:00</strong>
          </div>
          <div>
            <span>Anotado mañana</span>
            <strong id="rancho-count">0</strong>
          </div>
        </section>

        <section class="form-section">
          <div class="section-heading">
            <h3 id="rancho-date">Consumo de mañana</h3>
            <span id="rancho-hours">08:00 a 16:00</span>
          </div>
          <div id="rancho-menu" class="rancho-menu" aria-live="polite"></div>
        </section>

        <section class="form-section">
          <div class="section-heading">
            <h3>Historial reciente</h3>
            <span>Rancho</span>
          </div>
          <div id="rancho-history" class="turn-list" aria-live="polite"></div>
        </section>
      </section>

      <aside id="ticket-view" class="ticket" aria-live="polite" aria-label="Resumen del usuario">
        <div class="ticket-top">
          <span class="ticket-label">Resumen de cuenta</span>
          <strong id="ticket-code">CID-000</strong>
        </div>
        <dl class="ticket-details">
          <div>
            <dt>Usuario</dt>
            <dd id="ticket-name">Sin registrar</dd>
          </div>
          <div>
            <dt>Saldo general</dt>
            <dd id="ticket-date">Seleccione una fecha</dd>
          </div>
          <div>
            <dt>Deuda</dt>
            <dd id="ticket-time">Seleccione horario</dd>
          </div>
          <div>
            <dt>Próximo corte</dt>
            <dd id="ticket-service">Corte militar</dd>
          </div>
        </dl>
        <button id="user-report-button" class="primary-button" type="button">Ver reporte de usuario</button>
        <div id="user-summary-list" class="summary-list" aria-live="polite"></div>
        <section class="transfer-panel" aria-label="Datos para transferencia">
          <div class="section-heading">
            <h3>Transferencias</h3>
            <span>Saldo general</span>
          </div>
          <div class="transfer-grid">
            <div>
              <span>Banco</span>
              <strong id="transfer-bank">Banco</strong>
            </div>
            <div>
              <span>Cuenta</span>
              <strong id="transfer-account">0000000000</strong>
            </div>
            <div>
              <span>Titular</span>
              <strong id="transfer-owner">CIDFAE</strong>
            </div>
            <div>
              <span>Referencia</span>
              <strong id="transfer-reference">Cédula</strong>
            </div>
          </div>
          <div id="transfer-qr" class="qr-box" aria-label="QR para transferencia">QR</div>
        </section>
        <p id="ticket-message" class="ticket-message">El corte militar se descuenta de su saldo general.</p>
      </aside>

      <section id="admin-view" class="admin-view hidden" aria-labelledby="admin-title">
        <header class="booking-header">
          <div>
            <p class="eyebrow">Administrador</p>
            <h2 id="admin-title">Panel de control</h2>
          </div>
          <div class="status-pill admin">
            <span aria-hidden="true"></span>
            Acceso admin
          </div>
        </header>

        <div class="admin-tabs" role="tablist" aria-label="Administración">
          <button class="admin-tab active" type="button" data-admin-panel="general">General</button>
          <button class="admin-tab" type="button" data-admin-panel="rancho">Rancho</button>
          <button class="admin-tab" type="button" data-admin-panel="turns">Peluquería</button>
          <button class="admin-tab" type="button" data-admin-panel="users">Usuarios</button>
        </div>

        <div id="admin-general-panel">
          <section class="admin-stats" aria-label="Resumen administrativo">
            <div><span>Ingresos hoy</span><strong id="admin-income-day">$0.00</strong></div>
            <div><span>Ingresos semana</span><strong id="admin-income-week">$0.00</strong></div>
            <div><span>Ingresos mes</span><strong id="admin-income-month">$0.00</strong></div>
            <div><span>Usuarios</span><strong id="admin-user-total">0</strong></div>
          </section>

          <section class="admin-stats" aria-label="Resumen por servicio">
            <div><span>Peluquería mes</span><strong id="admin-hair-month">$0.00</strong></div>
            <div><span>Rancho mes</span><strong id="admin-rancho-month">$0.00</strong></div>
            <div><span>Egresos mes</span><strong id="admin-expense-month">$0.00</strong></div>
            <div><span>Balance mes</span><strong id="admin-balance-month">$0.00</strong></div>
          </section>

          <section class="admin-stats" aria-label="Resumen operativo">
            <div><span>Deuda total</span><strong id="admin-debt-total">$0.00</strong></div>
            <div><span>Raciones mañana</span><strong id="admin-rancho-tomorrow">0</strong></div>
            <div><span>Turnos pendientes</span><strong id="admin-hair-pending">0</strong></div>
            <div><span>Recuperaciones</span><strong id="admin-recovery-total">0</strong></div>
          </section>

          <section class="form-section system-settings" aria-labelledby="system-settings-title">
            <div class="section-heading">
              <h3 id="system-settings-title">Configuración general</h3>
              <span>Pagos, QR e imagen institucional</span>
            </div>
            <div class="turn-grid">
              <label><span>Banco</span><input id="rancho-bank" type="text"></label>
              <label><span>Cuenta</span><input id="rancho-account" type="text"></label>
              <label><span>Titular</span><input id="rancho-owner" type="text"></label>
              <label><span>Referencia</span><input id="rancho-reference" type="text"></label>
              <label><span>Datos para QR</span><input id="rancho-qr-text" type="text" placeholder="Datos para QR"></label>
              <label><span>Subir imagen QR</span><input id="rancho-qr-file" type="file" accept="image/png,image/jpeg,image/webp"></label>
            </div>
            <div class="brand-upload">
              <div id="system-qr-preview" class="qr-box" aria-label="QR actual">QR</div>
              <label><span>Vista previa QR</span><small>Seleccione una imagen QR y luego guarde la configuración.</small></label>
            </div>
            <div class="brand-upload">
              <img id="system-logo-preview" class="brand-upload-preview" src="assets/sello-logistica-cidfae.png" alt="Imagen institucional actual">
              <label><span>Subir nueva imagen</span><input id="system-logo-file" type="file" accept="image/png,image/jpeg,image/webp"></label>
              <button id="reset-system-logo" class="ghost-button" type="button">Restaurar imagen original</button>
            </div>
            <footer class="actions">
              <button id="save-system-settings" class="primary-button" type="button">Guardar configuración general</button>
            </footer>
            <p id="system-settings-message" class="settings-message" aria-live="polite"></p>
          </section>

          <section class="form-section">
            <div class="section-heading">
              <h3>Registrar egreso</h3>
              <span>Rendición de cuentas</span>
            </div>
            <div class="turn-grid">
              <label><span>Fecha</span><input id="admin-expense-date" type="date"></label>
              <label><span>Servicio</span><select id="admin-expense-service"><option>Peluquería</option><option>Rancho</option><option>General</option></select></label>
              <label><span>Concepto</span><input id="admin-expense-concept" type="text" placeholder="Compra, mantenimiento, insumo"></label>
              <label><span>Valor</span><input id="admin-expense-amount" type="number" min="0" step="0.01"></label>
            </div>
            <footer class="actions">
              <button id="admin-expense-create" class="ghost-button" type="button">Guardar egreso</button>
            </footer>
          </section>
        </div>

        <div id="admin-turns-panel" class="hidden">
          <section class="admin-stats" aria-label="Resumen de turnos">
            <div>
              <span>Total</span>
              <strong id="stat-total">0</strong>
            </div>
            <div>
              <span>Pendientes</span>
              <strong id="stat-pending">0</strong>
            </div>
            <div>
              <span>Atendidos</span>
              <strong id="stat-done">0</strong>
            </div>
          </section>

          <div class="admin-toolbar">
            <label>
              <span>Buscar turno</span>
              <input id="admin-search" type="search" placeholder="Nombre, código o cédula">
            </label>
            <label>
              <span>Filtrar estado</span>
              <select id="admin-status-filter">
                <option value="all">Todos</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Confirmado">Confirmado</option>
                <option value="Atendido">Atendido</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </label>
          </div>
          <section class="form-section">
            <div class="section-heading">
              <h3>Crear turno como administrador</h3>
              <span>Individual o masivo</span>
            </div>
            <div class="turn-grid">
              <label><span>Grado</span><select id="admin-hair-grade"></select></label>
              <label><span>Apellidos</span><input id="admin-hair-last-name" type="text"></label>
              <label><span>Nombres</span><input id="admin-hair-first-name" type="text"></label>
              <label><span>Cédula / código</span><input id="admin-hair-cedula" type="text"></label>
              <label><span>Unidad o reparto</span><input id="admin-hair-unit" type="text"></label>
              <label><span>Contacto</span><input id="admin-hair-contact" type="tel"></label>
              <label><span>Fecha</span><input id="admin-hair-date" type="date"></label>
              <label><span>Cantidad</span><input id="admin-hair-qty" type="number" min="1" max="12" value="1"></label>
            </div>
            <footer class="actions">
              <button id="admin-hair-create" class="primary-button" type="button">Crear turno(s)</button>
            </footer>
          </section>
          <section class="form-section">
            <div class="section-heading">
              <h3>Días sin atención</h3>
              <span>Peluquería</span>
            </div>
            <div class="turn-grid">
              <label><span>Fecha no disponible</span><input id="hair-closed-date" type="date"></label>
              <label><span>Motivo</span><input id="hair-closed-reason" type="text" placeholder="Permiso, vacaciones, mantenimiento"></label>
            </div>
            <footer class="actions">
              <button id="add-hair-closed-date" class="ghost-button" type="button">Bloquear fecha</button>
            </footer>
            <div id="hair-closed-list" class="turn-list compact-list" aria-live="polite"></div>
          </section>
          <footer class="actions report-actions">
            <label><span>Desde</span><input id="hair-report-start" type="date"></label>
            <label><span>Hasta</span><input id="hair-report-end" type="date"></label>
            <button id="hair-report-button" class="primary-button" type="button">Reporte corte</button>
          </footer>

          <div id="turn-list" class="turn-list" aria-live="polite"></div>
        </div>

        <div id="admin-users-panel" class="hidden">
          <section class="admin-stats" aria-label="Resumen de usuarios">
            <div>
              <span>Usuarios</span>
              <strong id="user-stat-total">0</strong>
            </div>
            <div>
              <span>Administradores</span>
              <strong id="user-stat-admin">0</strong>
            </div>
            <div>
              <span>Recuperaciones</span>
              <strong id="user-stat-recovery">0</strong>
            </div>
          </section>

          <div class="admin-toolbar">
            <label>
              <span>Buscar usuario</span>
              <input id="user-search" type="search" placeholder="Nombre, cédula o correo">
            </label>
            <label>
              <span>Filtrar rol</span>
              <select id="user-role-filter">
                <option value="all">Todos</option>
                <option value="user">Solicitantes</option>
                <option value="admin">Administradores</option>
              </select>
            </label>
          </div>

          <div id="user-list" class="turn-list" aria-live="polite"></div>

          <section class="outbox" aria-labelledby="outbox-title">
            <div class="section-heading">
              <h3 id="outbox-title">Bandeja de recuperación simulada</h3>
              <span>Prototipo</span>
            </div>
            <div id="recovery-list" class="turn-list" aria-live="polite"></div>
          </section>
        </div>

        <div id="admin-rancho-panel" class="hidden">
          <section class="admin-stats" aria-label="Resumen de rancho">
            <div>
              <span>Consumos</span>
              <strong id="rancho-stat-total">0</strong>
            </div>
            <div>
              <span>Recaudado</span>
              <strong id="rancho-stat-income">$0.00</strong>
            </div>
            <div>
              <span>Deuda total</span>
              <strong id="rancho-stat-debt">$0.00</strong>
            </div>
          </section>

          <section class="form-section">
            <div class="section-heading">
              <h3>Configuración del servicio</h3>
              <span>Horario y menú</span>
            </div>
            <div class="turn-grid">
              <label>
                <span>Hora apertura</span>
                <input id="rancho-open-hour" type="number" min="0" max="23">
              </label>
              <label>
                <span>Hora cierre</span>
                <input id="rancho-close-hour" type="number" min="0" max="23">
              </label>
              <label>
                <span>Repartos</span>
                <input id="rancho-units" type="text" placeholder="CIDFAE, GOMAI">
              </label>
            </div>
            <div class="rancho-admin-menu">
              <label>
                <span>Desayuno</span>
                <textarea id="menu-desayuno-desc" rows="2"></textarea>
                <input id="menu-desayuno-price" type="number" step="0.01" min="0">
              </label>
              <label>
                <span>Almuerzo</span>
                <textarea id="menu-almuerzo-desc" rows="2"></textarea>
                <input id="menu-almuerzo-price" type="number" step="0.01" min="0">
              </label>
              <label>
                <span>Merienda</span>
                <textarea id="menu-merienda-desc" rows="2"></textarea>
                <input id="menu-merienda-price" type="number" step="0.01" min="0">
              </label>
            </div>
            <footer class="actions">
              <button id="save-rancho-settings" class="primary-button" type="button">Guardar rancho</button>
            </footer>
          </section>

          <section class="form-section">
            <div class="section-heading">
              <h3>Registrar persona en rancho</h3>
              <span>Cuando el usuario no puede anotarse</span>
            </div>
            <div class="turn-grid">
              <label><span>Fecha de consumo</span><input id="single-rancho-date" type="date"></label>
              <label><span>Reparto / unidad</span><input id="single-rancho-unit" type="text" placeholder="Ej. CIDFAE"></label>
              <label><span>Comida</span><select id="single-rancho-meal"></select></label>
              <label><span>Grado</span><select id="single-rancho-grade"></select></label>
              <label><span>Apellidos</span><input id="single-rancho-last-name" type="text"></label>
              <label><span>Nombres</span><input id="single-rancho-first-name" type="text"></label>
              <label><span>Cédula / código</span><input id="single-rancho-cedula" type="text"></label>
            </div>
            <footer class="actions">
              <button id="single-rancho-create" class="primary-button" type="button">Registrar consumo</button>
            </footer>
          </section>

          <section class="form-section">
            <div class="section-heading">
              <h3>Carga masiva de rancho</h3>
              <span>Comisiones y unidades externas</span>
            </div>
            <div class="turn-grid">
              <label><span>Fecha de consumo</span><input id="bulk-rancho-date" type="date"></label>
              <label><span>Reparto / unidad</span><input id="bulk-rancho-unit" type="text" placeholder="Ej. GOMAI, Comisión externa"></label>
              <label><span>Comida</span><select id="bulk-rancho-meal"></select></label>
              <label><span>Cantidad</span><input id="bulk-rancho-qty" type="number" min="1" value="1"></label>
              <label><span>Responsable</span><input id="bulk-rancho-person" type="text" placeholder="Ej. Comisión de 30 personas"></label>
            </div>
            <footer class="actions">
              <button id="bulk-rancho-create" class="primary-button" type="button">Registrar consumos masivos</button>
            </footer>
          </section>

          <div class="admin-toolbar">
            <label>
              <span>Buscar consumo</span>
              <input id="rancho-admin-search" type="search" placeholder="Nombre, cédula o comida">
            </label>
            <label>
              <span>Filtrar comida</span>
              <select id="rancho-meal-filter">
                <option value="all">Todas</option>
                <option value="Desayuno">Desayuno</option>
                <option value="Almuerzo">Almuerzo</option>
                <option value="Merienda">Merienda</option>
              </select>
            </label>
          </div>
          <footer class="actions report-actions">
            <label><span>Desde</span><input id="rancho-report-start" type="date"></label>
            <label><span>Hasta</span><input id="rancho-report-end" type="date"></label>
            <button id="rancho-report-button" class="primary-button" type="button">Reporte rancho</button>
          </footer>
          <div id="rancho-admin-list" class="turn-list" aria-live="polite"></div>
        </div>
      </section>
    </main>

    <section id="report-view" class="report-view hidden" aria-labelledby="report-title">
      <div class="report-toolbar">
        <button id="close-report" class="ghost-button" type="button">Cerrar</button>
        <button id="print-report" class="primary-button" type="button">Imprimir / guardar PDF</button>
      </div>
      <article id="report-content" class="report-paper"></article>
    </section>
    
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>
    <script src="app.js"></script>
  </body>
</html>
