import React, { useState } from 'react';
import { PlusCircle, Trash2, DollarSign, Calendar, Edit2, TrendingDown, TrendingUp, Globe, Moon, Sun } from 'lucide-react';

const traducciones = {
  es: {
    titulo: 'Calculadora de Gastos Personales',
    subtitulo: 'Controla tus ingresos y gastos de forma automática',
    configuracionCategorias: 'Configuración de Categorías de Gastos',
    agregarCategoria: 'Agregar Categoría',
    infoCategoria: 'Configura tus gastos fijos una sola vez. Cada vez que agregues un ingreso, estos gastos se debitarán automáticamente.',
    tipoGasto: 'Tipo de Gasto',
    montoFijo: 'Monto Fijo',
    porcentaje: 'Porcentaje',
    montoFijoMensual: 'Monto Fijo Mensual',
    porcentajeIngreso: 'Porcentaje del Ingreso',
    categoriaConfigurada: 'Categoría configurada',
    seDebitara: 'Se debitará',
    deCadaIngreso: 'de cada ingreso',
    registroIngresos: 'Registro de Ingresos',
    nuevoIngreso: 'Nuevo Ingreso',
    fechaIngreso: 'Fecha de Ingreso',
    montoIngreso: 'Monto del Ingreso',
    guardarIngreso: 'Guardar Ingreso',
    gastosDebitados: 'Gastos debitados automáticamente:',
    totalGastos: 'Total Gastos',
    restante: 'Restante',
    noIngresos: 'No hay ingresos registrados aún.',
    usaBoton: 'Usa el botón',
    paraAgregar: 'para agregar uno.',
    resumenGeneral: 'Resumen General',
    totalIngresosAcumulados: 'Total Ingresos Acumulados',
    totalGastosAcumulados: 'Total de Gastos Acumulados',
    totalRestanteDisponible: 'Total Restante Disponible',
    gastos: 'Gastos',
    disponible: 'Disponible',
    metasArticulos: 'Metas / Artículos',
    agregarMeta: 'Agregar Meta',
    registraIngreso: 'Primero registra al menos un ingreso',
    mesActual: 'Mes actual',
    presupuestoTotal: 'Presupuesto Total',
    tipoAporteMensual: 'Tipo de Aporte Mensual',
    porcentajeRestante: 'Porcentaje del Restante',
    montoMensual: 'Monto Mensual',
    aporteMensual: 'Aporte mensual',
    delRestante: 'del restante disponible',
    aplicarPago: 'Aplicar Pago del Mes',
    pagadoEsteMes: 'Pagado este mes',
    pagado: 'Pagado',
    faltante: 'Faltante',
    mesesRestantes: 'Meses restantes',
    progreso: 'Progreso',
    metaCompletada: '¡Meta completada!',
    resumenMetas: 'Resumen de Metas',
    totalPagadoMes: 'Total pagado este mes',
    totalAcumuladoMetas: 'Total acumulado en todas las metas',
    noMetas: 'No hay metas registradas.',
    nuevaCategoria: 'Nueva Categoría',
    nuevaMeta: 'Nueva Meta'
  },
  en: {
    titulo: 'Personal Expense Calculator',
    subtitulo: 'Control your income and expenses automatically',
    configuracionCategorias: 'Expense Categories Setup',
    agregarCategoria: 'Add Category',
    infoCategoria: 'Set up your fixed expenses once. Every time you add income, these expenses will be automatically debited.',
    tipoGasto: 'Expense Type',
    montoFijo: 'Fixed Amount',
    porcentaje: 'Percentage',
    montoFijoMensual: 'Monthly Fixed Amount',
    porcentajeIngreso: 'Income Percentage',
    categoriaConfigurada: 'Category configured',
    seDebitara: 'Will be debited',
    deCadaIngreso: 'from each income',
    registroIngresos: 'Income Register',
    nuevoIngreso: 'New Income',
    fechaIngreso: 'Income Date',
    montoIngreso: 'Income Amount',
    guardarIngreso: 'Save Income',
    gastosDebitados: 'Automatically debited expenses:',
    totalGastos: 'Total Expenses',
    restante: 'Remaining',
    noIngresos: 'No income registered yet.',
    usaBoton: 'Use the button',
    paraAgregar: 'to add one.',
    resumenGeneral: 'General Summary',
    totalIngresosAcumulados: 'Total Accumulated Income',
    totalGastosAcumulados: 'Total Accumulated Expenses',
    totalRestanteDisponible: 'Total Available Remaining',
    gastos: 'Expenses',
    disponible: 'Available',
    metasArticulos: 'Goals / Items',
    agregarMeta: 'Add Goal',
    registraIngreso: 'First register at least one income',
    mesActual: 'Current month',
    presupuestoTotal: 'Total Budget',
    tipoAporteMensual: 'Monthly Contribution Type',
    porcentajeRestante: 'Percentage of Remaining',
    montoMensual: 'Monthly Amount',
    aporteMensual: 'Monthly contribution',
    delRestante: 'of available remaining',
    aplicarPago: 'Apply Payment for Month',
    pagadoEsteMes: 'Paid this month',
    pagado: 'Paid',
    faltante: 'Remaining',
    mesesRestantes: 'Months left',
    progreso: 'Progress',
    metaCompletada: 'Goal completed!',
    resumenMetas: 'Goals Summary',
    totalPagadoMes: 'Total paid this month',
    totalAcumuladoMetas: 'Total accumulated in all goals',
    noMetas: 'No goals registered.',
    nuevaCategoria: 'New Category',
    nuevaMeta: 'New Goal'
  },
  ru: {
    titulo: 'Калькулятор личных расходов',
    subtitulo: 'Контролируйте свои доходы и расходы автоматически',
    configuracionCategorias: 'Настройка категорий расходов',
    agregarCategoria: 'Добавить категорию',
    infoCategoria: 'Настройте постоянные расходы один раз. При каждом добавлении дохода эти расходы будут автоматически списываться.',
    tipoGasto: 'Тип расхода',
    montoFijo: 'Фиксированная сумма',
    porcentaje: 'Процент',
    montoFijoMensual: 'Ежемесячная фиксированная сумма',
    porcentajeIngreso: 'Процент от дохода',
    categoriaConfigurada: 'Категория настроена',
    seDebitara: 'Будет списано',
    deCadaIngreso: 'с каждого дохода',
    registroIngresos: 'Регистр доходов',
    nuevoIngreso: 'Новый доход',
    fechaIngreso: 'Дата дохода',
    montoIngreso: 'Сумма дохода',
    guardarIngreso: 'Сохранить доход',
    gastosDebitados: 'Автоматически списанные расходы:',
    totalGastos: 'Всего расходов',
    restante: 'Остаток',
    noIngresos: 'Доходы еще не зарегистрированы.',
    usaBoton: 'Используйте кнопку',
    paraAgregar: 'чтобы добавить.',
    resumenGeneral: 'Общая сводка',
    totalIngresosAcumulados: 'Общий накопленный доход',
    totalGastosAcumulados: 'Общие накопленные расходы',
    totalRestanteDisponible: 'Общий доступный остаток',
    gastos: 'Расходы',
    disponible: 'Доступно',
    metasArticulos: 'Цели / Предметы',
    agregarMeta: 'Добавить цель',
    registraIngreso: 'Сначала зарегистрируйте хотя бы один доход',
    mesActual: 'Текущий месяц',
    presupuestoTotal: 'Общий бюджет',
    tipoAporteMensual: 'Тип ежемесячного взноса',
    porcentajeRestante: 'Процент от остатка',
    montoMensual: 'Ежемесячная сумма',
    aporteMensual: 'Ежемесячный взнос',
    delRestante: 'от доступного остатка',
    aplicarPago: 'Применить платеж за месяц',
    pagadoEsteMes: 'Оплачено в этом месяце',
    pagado: 'Оплачено',
    faltante: 'Осталось',
    mesesRestantes: 'Осталось месяцев',
    progreso: 'Прогресс',
    metaCompletada: 'Цель достигнута!',
    resumenMetas: 'Сводка целей',
    totalPagadoMes: 'Всего оплачено в этом месяце',
    totalAcumuladoMetas: 'Всего накоплено во всех целях',
    noMetas: 'Цели не зарегистрированы.',
    nuevaCategoria: 'Новая категория',
    nuevaMeta: 'Новая цель'
  },
  de: {
    titulo: 'Persönlicher Ausgabenrechner',
    subtitulo: 'Kontrollieren Sie Ihre Einnahmen und Ausgaben automatisch',
    configuracionCategorias: 'Ausgabenkategorien-Konfiguration',
    agregarCategoria: 'Kategorie hinzufügen',
    infoCategoria: 'Richten Sie Ihre festen Ausgaben einmal ein. Bei jedem Einkommen werden diese Ausgaben automatisch abgebucht.',
    tipoGasto: 'Ausgabentyp',
    montoFijo: 'Fester Betrag',
    porcentaje: 'Prozentsatz',
    montoFijoMensual: 'Monatlicher Festbetrag',
    porcentajeIngreso: 'Einkommensprozentsatz',
    categoriaConfigurada: 'Kategorie konfiguriert',
    seDebitara: 'Wird abgebucht',
    deCadaIngreso: 'von jedem Einkommen',
    registroIngresos: 'Einkommensregister',
    nuevoIngreso: 'Neues Einkommen',
    fechaIngreso: 'Einkommensdatum',
    montoIngreso: 'Einkommensbetrag',
    guardarIngreso: 'Einkommen speichern',
    gastosDebitados: 'Automatisch abgebuchte Ausgaben:',
    totalGastos: 'Gesamtausgaben',
    restante: 'Verbleibend',
    noIngresos: 'Noch keine Einkommen registriert.',
    usaBoton: 'Verwenden Sie die Schaltfläche',
    paraAgregar: 'um eines hinzuzufügen.',
    resumenGeneral: 'Gesamtübersicht',
    totalIngresosAcumulados: 'Gesamtes akkumuliertes Einkommen',
    totalGastosAcumulados: 'Gesamte akkumulierte Ausgaben',
    totalRestanteDisponible: 'Verfügbarer Gesamtrestbetrag',
    gastos: 'Ausgaben',
    disponible: 'Verfügbar',
    metasArticulos: 'Ziele / Artikel',
    agregarMeta: 'Ziel hinzufügen',
    registraIngreso: 'Registrieren Sie zuerst mindestens ein Einkommen',
    mesActual: 'Aktueller Monat',
    presupuestoTotal: 'Gesamtbudget',
    tipoAporteMensual: 'Monatlicher Beitragstyp',
    porcentajeRestante: 'Prozentsatz des Restbetrags',
    montoMensual: 'Monatlicher Betrag',
    aporteMensual: 'Monatlicher Beitrag',
    delRestante: 'des verfügbaren Restbetrags',
    aplicarPago: 'Zahlung für Monat anwenden',
    pagadoEsteMes: 'Diesen Monat bezahlt',
    pagado: 'Bezahlt',
    faltante: 'Fehlend',
    mesesRestantes: 'Verbleibende Monate',
    progreso: 'Fortschritt',
    metaCompletada: 'Ziel erreicht!',
    resumenMetas: 'Ziele-Zusammenfassung',
    totalPagadoMes: 'Diesen Monat insgesamt bezahlt',
    totalAcumuladoMetas: 'Insgesamt in allen Zielen angesammelt',
    noMetas: 'Keine Ziele registriert.',
    nuevaCategoria: 'Neue Kategorie',
    nuevaMeta: 'Neues Ziel'
  }
};

export default function CalculadoraGastos() {
  const [idioma, setIdioma] = useState('es');
  const [temaOscuro, setTemaOscuro] = useState(false);
  const [ingresos, setIngresos] = useState([]);
  const [categorias, setCategorias] = useState([
    { id: 1, nombre: 'Habitación', monto: '', porcentaje: '', tipoValor: 'monto' },
    { id: 2, nombre: 'Comida', monto: '', porcentaje: '', tipoValor: 'monto' },
    { id: 3, nombre: 'Transporte', monto: '', porcentaje: '', tipoValor: 'monto' }
  ]);
  const [editandoCategoria, setEditandoCategoria] = useState(null);
  const [metas, setMetas] = useState([]);
  const [editandoMeta, setEditandoMeta] = useState(null);
  const [mesActual, setMesActual] = useState(1);
  const [nuevoIngreso, setNuevoIngreso] = useState({ fecha: '', monto: '' });
  const [mostrandoFormIngreso, setMostrandoFormIngreso] = useState(false);

  const t = traducciones[idioma];

  const agregarCategoria = () => {
    const nuevaCategoria = {
      id: Date.now(),
      nombre: t.nuevaCategoria,
      monto: '',
      porcentaje: '',
      tipoValor: 'monto'
    };
    setCategorias([...categorias, nuevaCategoria]);
    setEditandoCategoria(nuevaCategoria.id);
  };

  const eliminarCategoria = (id) => {
    setCategorias(categorias.filter(cat => cat.id !== id));
  };

  const editarNombreCategoria = (id, nuevoNombre) => {
    setCategorias(categorias.map(cat => 
      cat.id === id ? { ...cat, nombre: nuevoNombre } : cat
    ));
  };

  const cambiarTipoValor = (id, tipo) => {
    setCategorias(categorias.map(cat =>
      cat.id === id ? { ...cat, tipoValor: tipo, monto: '', porcentaje: '' } : cat
    ));
  };

  const actualizarValorCategoria = (id, valor) => {
    setCategorias(categorias.map(cat => {
      if (cat.id === id) {
        if (cat.tipoValor === 'monto') {
          return { ...cat, monto: valor, porcentaje: '' };
        } else {
          return { ...cat, porcentaje: valor, monto: '' };
        }
      }
      return cat;
    }));
  };

  const calcularMontoGasto = (categoria, ingresoMonto) => {
    if (categoria.tipoValor === 'monto') {
      return parseFloat(categoria.monto) || 0;
    } else {
      const porcentaje = parseFloat(categoria.porcentaje) || 0;
      return (ingresoMonto * porcentaje) / 100;
    }
  };

  const agregarIngreso = () => {
    if (!nuevoIngreso.fecha || !nuevoIngreso.monto) return;

    const montoIngreso = parseFloat(nuevoIngreso.monto);
    
    const gastosCalculados = categorias
      .filter(cat => cat.monto || cat.porcentaje)
      .map(cat => ({
        categoriaId: cat.id,
        nombre: cat.nombre,
        monto: calcularMontoGasto(cat, montoIngreso),
        porcentaje: cat.tipoValor === 'porcentaje' ? parseFloat(cat.porcentaje) : ((calcularMontoGasto(cat, montoIngreso) / montoIngreso) * 100).toFixed(2)
      }));

    const totalGastos = gastosCalculados.reduce((sum, gasto) => sum + gasto.monto, 0);
    const restante = montoIngreso - totalGastos;

    const ingreso = {
      id: Date.now(),
      fecha: nuevoIngreso.fecha,
      monto: montoIngreso,
      gastos: gastosCalculados,
      totalGastos: totalGastos,
      restante: restante
    };

    setIngresos([...ingresos, ingreso]);
    setNuevoIngreso({ fecha: '', monto: '' });
    setMostrandoFormIngreso(false);
  };

  const eliminarIngreso = (id) => {
    setIngresos(ingresos.filter(ing => ing.id !== id));
  };

  const calcularTotalesGenerales = () => {
    const totalIngresos = ingresos.reduce((sum, ing) => sum + ing.monto, 0);
    const totalGastos = ingresos.reduce((sum, ing) => sum + ing.totalGastos, 0);
    const totalRestante = ingresos.reduce((sum, ing) => sum + ing.restante, 0);

    return {
      totalIngresos,
      totalGastos,
      totalRestante,
      porcentajeGastos: totalIngresos > 0 ? ((totalGastos / totalIngresos) * 100).toFixed(2) : 0,
      porcentajeRestante: totalIngresos > 0 ? ((totalRestante / totalIngresos) * 100).toFixed(2) : 0
    };
  };

  const totalesGenerales = calcularTotalesGenerales();

  const agregarMeta = () => {
    const nuevaMeta = {
      id: Date.now(),
      nombre: t.nuevaMeta,
      presupuestoTotal: '',
      tipoAporte: 'monto',
      valorAporte: '',
      pagosPorMes: {},
      totalPagado: 0
    };
    setMetas([...metas, nuevaMeta]);
    setEditandoMeta(nuevaMeta.id);
  };

  const eliminarMeta = (id) => {
    setMetas(metas.filter(meta => meta.id !== id));
  };

  const editarNombreMeta = (id, nuevoNombre) => {
    setMetas(metas.map(meta => 
      meta.id === id ? { ...meta, nombre: nuevoNombre } : meta
    ));
  };

  const actualizarPresupuestoMeta = (id, valor) => {
    setMetas(metas.map(meta =>
      meta.id === id ? { ...meta, presupuestoTotal: valor } : meta
    ));
  };

  const actualizarTipoAporte = (id, tipo) => {
    setMetas(metas.map(meta =>
      meta.id === id ? { ...meta, tipoAporte: tipo, valorAporte: '' } : meta
    ));
  };

  const actualizarValorAporte = (id, valor) => {
    setMetas(metas.map(meta =>
      meta.id === id ? { ...meta, valorAporte: valor } : meta
    ));
  };

  const calcularAporteMensual = (meta) => {
    if (!meta.valorAporte || !totalesGenerales.totalRestante) return 0;
    
    if (meta.tipoAporte === 'porcentaje') {
      return (totalesGenerales.totalRestante * parseFloat(meta.valorAporte)) / 100;
    } else {
      return parseFloat(meta.valorAporte);
    }
  };

  const aplicarPagoMensual = (metaId) => {
    setMetas(metas.map(meta => {
      if (meta.id === metaId) {
        const aporteMensual = calcularAporteMensual(meta);
        const nuevosPagos = { ...meta.pagosPorMes, [mesActual]: aporteMensual };
        const totalPagado = Object.values(nuevosPagos).reduce((sum, pago) => sum + pago, 0);
        
        return {
          ...meta,
          pagosPorMes: nuevosPagos,
          totalPagado: totalPagado
        };
      }
      return meta;
    }));
  };

  const calcularProgresoMeta = (meta) => {
    const presupuesto = parseFloat(meta.presupuestoTotal) || 0;
    const pagado = meta.totalPagado;
    const faltante = presupuesto - pagado;
    const porcentajeCompletado = presupuesto > 0 ? (pagado / presupuesto) * 100 : 0;
    
    const aporteMensual = calcularAporteMensual(meta);
    const mesesFaltantes = aporteMensual > 0 ? Math.ceil(faltante / aporteMensual) : 0;

    return {
      pagado,
      faltante: Math.max(0, faltante),
      porcentajeCompletado: Math.min(100, porcentajeCompletado),
      mesesFaltantes
    };
  };

  const calcularTotalesMetas = () => {
    const totalPagadoMesActual = metas.reduce((sum, meta) => {
      return sum + (meta.pagosPorMes[mesActual] || 0);
    }, 0);

    const totalAcumuladoMetas = metas.reduce((sum, meta) => {
      return sum + meta.totalPagado;
    }, 0);

    return {
      totalPagadoMesActual,
      totalAcumuladoMetas
    };
  };

  const totalesMetas = calcularTotalesMetas();

  const temas = {
    claro: {
      fondo: 'bg-gradient-to-br from-slate-50 to-blue-50',
      tarjeta: 'bg-white',
      texto: 'text-gray-800',
      textoSecundario: 'text-gray-600',
      borde: 'border-gray-200',
      input: 'bg-white border-gray-300 text-gray-800',
      botonPrimario: 'bg-blue-600 hover:bg-blue-700',
      botonVerde: 'bg-green-600 hover:bg-green-700',
      acento: 'text-blue-600'
    },
    oscuro: {
      fondo: 'bg-gradient-to-br from-gray-900 to-gray-800',
      tarjeta: 'bg-gray-800',
      texto: 'text-gray-100',
      textoSecundario: 'text-gray-300',
      borde: 'border-gray-700',
      input: 'bg-gray-700 border-gray-600 text-gray-100',
      botonPrimario: 'bg-blue-700 hover:bg-blue-800',
      botonVerde: 'bg-green-700 hover:bg-green-800',
      acento: 'text-blue-400'
    }
  };

  const tema = temaOscuro ? temas.oscuro : temas.claro;

  return (
    <div className={`min-h-screen ${tema.fondo} p-4`}>
      <div className="max-w-5xl mx-auto">
        <div className={`${tema.tarjeta} rounded-2xl shadow-xl p-6 mb-6`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className={`text-3xl font-bold ${tema.texto} mb-2 flex items-center gap-3`}>
                <DollarSign className="text-blue-600" size={36} />
                {t.titulo}
              </h1>
              <p className={tema.textoSecundario}>{t.subtitulo}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <Globe className={tema.acento} size={20} />
                <select
                  value={idioma}
                  onChange={(e) => setIdioma(e.target.value)}
                  className={`px-3 py-2 rounded-lg ${tema.input} border-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-semibold`}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              <button
                onClick={() => setTemaOscuro(!temaOscuro)}
                className={`${tema.botonPrimario} text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2`}
              >
                {temaOscuro ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>

        <div className={`${tema.tarjeta} rounded-xl shadow-lg p-6 mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${tema.texto} flex items-center gap-2`}>
              <TrendingDown className="text-orange-600" size={28} />
              {t.configuracionCategorias}
            </h2>
            <button
              onClick={agregarCategoria}
              className={`${tema.botonPrimario} text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 font-semibold`}
            >
              <PlusCircle size={20} />
              {t.agregarCategoria}
            </button>
          </div>

          <div className="mb-4 p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
            <p className="text-blue-800 text-sm">
              💡 <strong>{t.infoCategoria}</strong>
            </p>
          </div>

          <div className="space-y-4">
            {categorias.map((categoria) => (
              <div key={categoria.id} className={`border-2 ${tema.borde} rounded-lg p-4 hover:border-blue-300 transition-all`}>
                <div className="flex items-center gap-3 mb-3">
                  {editandoCategoria === categoria.id ? (
                    <input
                      type="text"
                      value={categoria.nombre}
                      onChange={(e) => editarNombreCategoria(categoria.id, e.target.value)}
                      onBlur={() => setEditandoCategoria(null)}
                      onKeyPress={(e) => e.key === 'Enter' && setEditandoCategoria(null)}
                      autoFocus
                      className={`flex-1 px-3 py-2 border-2 border-blue-500 rounded-lg font-semibold ${tema.input} focus:ring-2 focus:ring-blue-300`}
                    />
                  ) : (
                    <h3 className={`flex-1 font-semibold text-lg ${tema.texto}`}>{categoria.nombre}</h3>
                  )}
                  <button
                    onClick={() => setEditandoCategoria(categoria.id)}
                    className="text-blue-600 hover:text-blue-800 p-2"
                  >
                    <Edit2 size={18} />
                  </button>
                  <button
                    onClick={() => eliminarCategoria(categoria.id)}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className={`block text-sm font-semibold ${tema.textoSecundario} mb-2`}>
                      {t.tipoGasto}
                    </label>
                    <select
                      value={categoria.tipoValor}
                      onChange={(e) => cambiarTipoValor(categoria.id, e.target.value)}
                      className={`w-full px-4 py-2 border-2 rounded-lg ${tema.input} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                    >
                      <option value="monto">{t.montoFijo}</option>
                      <option value="porcentaje">{t.porcentaje}</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className={`block text-sm font-semibold ${tema.textoSecundario} mb-2`}>
                      {categoria.tipoValor === 'monto' ? t.montoFijoMensual : t.porcentajeIngreso}
                    </label>
                    <div className="relative">
                      {categoria.tipoValor === 'monto' && (
                        <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${tema.textoSecundario} font-bold`}>$</span>
                      )}
                      <input
                        type="number"
                        value={categoria.tipoValor === 'monto' ? categoria.monto : categoria.porcentaje}
                        onChange={(e) => actualizarValorCategoria(categoria.id, e.target.value)}
                        placeholder="0.00"
                        className={`w-full ${categoria.tipoValor === 'monto' ? 'pl-8' : 'pl-4'} pr-8 py-2 border-2 rounded-lg ${tema.input} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`}
                      />
                      {categoria.tipoValor === 'porcentaje' && (
                        <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${tema.textoSecundario} font-bold`}>%</span>
                      )}
                    </div>
                  </div>
                </div>

                {(categoria.monto || categoria.porcentaje) && (
                  <div className="mt-3 p-2 bg-green-50 rounded text-sm text-green-800 border border-green-200">
                    <span className="font-semibold">✓ {t.categoriaConfigurada}</span>
                    {categoria.tipoValor === 'monto' 
                      ? ` - ${t.seDebitara} ${parseFloat(categoria.monto).toLocaleString('es-ES', { minimumFractionDigits: 2 })} ${t.deCadaIngreso}`
                      : ` - ${t.seDebitara} ${categoria.porcentaje}% ${t.deCadaIngreso}`
                    }
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`${tema.tarjeta} rounded-xl shadow-lg p-6 mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${tema.texto} flex items-center gap-2`}>
              <TrendingUp className="text-green-600" size={28} />
              {t.registroIngresos}
            </h2>
            <button
              onClick={() => setMostrandoFormIngreso(!mostrandoFormIngreso)}
              className={`${tema.botonVerde} text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 font-semibold`}
            >
              <PlusCircle size={20} />
              {t.nuevoIngreso}
            </button>
          </div>

          {mostrandoFormIngreso && (
            <div className="mb-4 p-4 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="grid md:grid-cols-2 gap-4 mb-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.fechaIngreso}
                  </label>
                  <input
                    type="date"
                    value={nuevoIngreso.fecha}
                    onChange={(e) => setNuevoIngreso({ ...nuevoIngreso, fecha: e.target.value })}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t.montoIngreso}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-lg">$</span>
                    <input
                      type="number"
                      value={nuevoIngreso.monto}
                      onChange={(e) => setNuevoIngreso({ ...nuevoIngreso, monto: e.target.value })}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-lg font-semibold"
                    />
                  </div>
                </div>
              </div>
              <button
                onClick={agregarIngreso}
                className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                {t.guardarIngreso}
              </button>
            </div>
          )}

          <div className="space-y-3">
            {ingresos.map((ingreso) => (
              <div key={ingreso.id} className={`border-2 ${tema.borde} rounded-lg p-4`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className={`flex items-center gap-2 ${tema.textoSecundario} mb-1`}>
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">{ingreso.fecha}</span>
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      ${ingreso.monto.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                  <button
                    onClick={() => eliminarIngreso(ingreso.id)}
                    className="text-red-600 hover:text-red-800 p-2"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>

                <div className="space-y-1 text-sm">
                  <p className={`font-semibold ${tema.textoSecundario} mb-2`}>{t.gastosDebitados}</p>
                  {ingreso.gastos.map((gasto, idx) => (
                    <div key={idx} className={`flex justify-between ${tema.textoSecundario} pl-4`}>
                      <span>• {gasto.nombre}:</span>
                      <span className="font-semibold">${gasto.monto.toLocaleString('es-ES', { minimumFractionDigits: 2 })} ({gasto.porcentaje}%)</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 mt-2">
                    <div className={`flex justify-between ${tema.textoSecundario} font-semibold`}>
                      <span>{t.totalGastos}:</span>
                      <span className="text-red-600">${ingreso.totalGastos.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-bold mt-1">
                      <span>{t.restante}:</span>
                      <span>${ingreso.restante.toLocaleString('es-ES', { minimumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {ingresos.length === 0 && (
              <div className={`text-center py-8 ${tema.textoSecundario}`}>
                <p>{t.noIngresos}</p>
                <p className="text-sm mt-2">{t.usaBoton} "{t.nuevoIngreso}" {t.paraAgregar}</p>
              </div>
            )}
          </div>
        </div>

        {ingresos.length > 0 && (
          <div className={`${tema.tarjeta} rounded-xl shadow-lg p-6 mb-6`}>
            <h2 className={`text-2xl font-bold ${tema.texto} mb-4`}>{t.resumenGeneral}</h2>
            
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{t.totalIngresosAcumulados}:</span>
                  <span className="text-green-700 font-bold text-xl">
                    ${totalesGenerales.totalIngresos.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-right text-green-600 font-semibold text-sm mt-1">100%</div>
              </div>

              <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{t.totalGastosAcumulados}:</span>
                  <span className="text-red-700 font-bold text-xl">
                    ${totalesGenerales.totalGastos.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-right text-red-600 font-semibold text-sm mt-1">
                  {totalesGenerales.porcentajeGastos}%
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{t.totalRestanteDisponible}:</span>
                  <span className="text-blue-700 font-bold text-xl">
                    ${totalesGenerales.totalRestante.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="text-right text-blue-600 font-semibold text-sm mt-1">
                  {totalesGenerales.porcentajeRestante}%
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="w-full h-8 bg-gray-200 rounded-full overflow-hidden flex">
                <div 
                  className="bg-red-500 flex items-center justify-center text-white text-xs font-bold"
                  style={{ width: `${Math.min(parseFloat(totalesGenerales.porcentajeGastos), 100)}%` }}
                >
                  {totalesGenerales.porcentajeGastos > 10 && `${totalesGenerales.porcentajeGastos}%`}
                </div>
                {totalesGenerales.totalRestante > 0 && (
                  <div 
                    className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
                    style={{ width: `${parseFloat(totalesGenerales.porcentajeRestante)}%` }}
                  >
                    {totalesGenerales.porcentajeRestante > 10 && `${totalesGenerales.porcentajeRestante}%`}
                  </div>
                )}
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <span className="text-red-600 font-semibold">{t.gastos}</span>
                <span className="text-blue-600 font-semibold">{t.disponible}</span>
              </div>
            </div>
          </div>
        )}

        <div className={`${tema.tarjeta} rounded-xl shadow-lg p-6 mt-6`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className={`text-2xl font-bold ${tema.texto}`}>{t.metasArticulos}</h2>
            <button
              onClick={agregarMeta}
              className={`${tema.botonPrimario} text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 font-semibold`}
            >
              <PlusCircle size={20} />
              {t.agregarMeta}
            </button>
          </div>

          {totalesGenerales.totalIngresos === 0 && (
            <div className="text-center py-8 bg-yellow-50 rounded-lg border-2 border-yellow-200">
              <p className="text-yellow-800 font-semibold">
                ⚠️ {t.registraIngreso}
              </p>
            </div>
          )}

          {totalesGenerales.totalIngresos > 0 && metas.length > 0 && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">{t.mesActual}:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMesActual(Math.max(1, mesActual - 1))}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    disabled={mesActual <= 1}
                  >
                    ←
                  </button>
                  <span className="text-blue-700 font-bold text-lg">{t.mesActual} {mesActual}</span>
                  <button
                    onClick={() => setMesActual(mesActual + 1)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-4 mt-4">
            {metas.map((meta) => {
              const progreso = calcularProgresoMeta(meta);
              const aporteMensual = calcularAporteMensual(meta);
              const pagadoEsteMes = meta.pagosPorMes[mesActual] || 0;

              return (
                <div key={meta.id} className={`border-2 ${tema.borde} rounded-lg p-4 hover:border-blue-300 transition-all`}>
                  <div className="flex items-center gap-3 mb-3">
                    {editandoMeta === meta.id ? (
                      <input
                        type="text"
                        value={meta.nombre}
                        onChange={(e) => editarNombreMeta(meta.id, e.target.value)}
                        onBlur={() => setEditandoMeta(null)}
                        onKeyPress={(e) => e.key === 'Enter' && setEditandoMeta(null)}
                        autoFocus
                        className={`flex-1 px-3 py-2 border-2 border-blue-500 rounded-lg font-semibold ${tema.input} focus:ring-2 focus:ring-blue-300`}
                      />
                    ) : (
                      <h3 className={`flex-1 font-semibold text-lg ${tema.texto}`}>{meta.nombre}</h3>
                    )}
                    <button
                      onClick={() => setEditandoMeta(meta.id)}
                      className="text-blue-600 hover:text-blue-800 p-2"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      onClick={() => eliminarMeta(meta.id)}
                      className="text-red-600 hover:text-red-800 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className={`block text-sm font-semibold ${tema.textoSecundario} mb-2`}>
                        {t.presupuestoTotal}
                      </label>
                      <div className="relative">
                        <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${tema.textoSecundario} font-bold`}>$</span>
                        <input
                          type="number"
                          value={meta.presupuestoTotal}
                          onChange={(e) => actualizarPresupuestoMeta(meta.id, e.target.value)}
                          placeholder="0.00"
                          disabled={!totalesGenerales.totalIngresos}
                          className={`w-full pl-8 pr-4 py-2 border-2 rounded-lg ${tema.input} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-semibold ${tema.textoSecundario} mb-2`}>
                        {t.tipoAporteMensual}
                      </label>
                      <select
                        value={meta.tipoAporte}
                        onChange={(e) => actualizarTipoAporte(meta.id, e.target.value)}
                        disabled={!totalesGenerales.totalIngresos}
                        className={`w-full px-4 py-2 border-2 rounded-lg ${tema.input} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all`}
                      >
                        <option value="monto">{t.montoFijo}</option>
                        <option value="porcentaje">{t.porcentaje}</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className={`block text-sm font-semibold ${tema.textoSecundario} mb-2`}>
                      {meta.tipoAporte === 'porcentaje' ? t.porcentajeRestante : t.montoMensual}
                    </label>
                    <div className="relative">
                      {meta.tipoAporte === 'monto' && (
                        <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${tema.textoSecundario} font-bold`}>$</span>
                      )}
                      <input
                        type="number"
                        value={meta.valorAporte}
                        onChange={(e) => actualizarValorAporte(meta.id, e.target.value)}
                        placeholder="0.00"
                        disabled={!totalesGenerales.totalIngresos || !totalesGenerales.totalRestante}
                        className={`w-full ${meta.tipoAporte === 'monto' ? 'pl-8' : 'pl-4'} pr-8 py-2 border-2 rounded-lg ${tema.input} focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all`}
                      />
                      {meta.tipoAporte === 'porcentaje' && (
                        <span className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${tema.textoSecundario} font-bold`}>%</span>
                      )}
                    </div>
                    {meta.valorAporte && (
                      <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-blue-800">
                        <span className="font-semibold">
                          {t.aporteMensual}: ${aporteMensual.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                        </span>
                        {meta.tipoAporte === 'porcentaje' && (
                          <span> ({meta.valorAporte}% {t.delRestante})</span>
                        )}
                      </div>
                    )}
                  </div>

                  {meta.presupuestoTotal && meta.valorAporte && !pagadoEsteMes && progreso.faltante > 0 && (
                    <button
                      onClick={() => aplicarPagoMensual(meta.id)}
                      className="w-full mb-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                      {t.aplicarPago} {mesActual}
                    </button>
                  )}

                  {pagadoEsteMes > 0 && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg border-2 border-green-200">
                      <p className="text-green-800 font-semibold text-center">
                        ✓ {t.pagadoEsteMes}: ${pagadoEsteMes.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                  )}

                  {meta.presupuestoTotal && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div className="p-2 bg-green-50 rounded text-center">
                          <p className="text-gray-700 font-semibold">{t.pagado}</p>
                          <p className="text-green-700 font-bold">
                            ${progreso.pagado.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div className="p-2 bg-orange-50 rounded text-center">
                          <p className="text-gray-700 font-semibold">{t.faltante}</p>
                          <p className="text-orange-700 font-bold">
                            ${progreso.faltante.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                          </p>
                        </div>
                        <div className="p-2 bg-blue-50 rounded text-center">
                          <p className="text-gray-700 font-semibold">{t.mesesRestantes}</p>
                          <p className="text-blue-700 font-bold">
                            {progreso.mesesFaltantes > 0 ? progreso.mesesFaltantes : '✓'}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700 font-semibold">{t.progreso}</span>
                          <span className="text-blue-600 font-bold">{progreso.porcentajeCompletado.toFixed(1)}%</span>
                        </div>
                        <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 flex items-center justify-center text-white text-xs font-bold"
                            style={{ width: `${progreso.porcentajeCompletado}%` }}
                          >
                            {progreso.porcentajeCompletado > 15 && `${progreso.porcentajeCompletado.toFixed(1)}%`}
                          </div>
                        </div>
                      </div>

                      {progreso.porcentajeCompletado >= 100 && (
                        <div className="p-3 bg-green-100 rounded-lg border-2 border-green-300">
                          <p className="text-green-800 font-bold text-center">
                            🎉 {t.metaCompletada}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {metas.length > 0 && totalesGenerales.totalIngresos > 0 && (
            <div className="mt-6 space-y-4">
              <h3 className={`text-xl font-bold ${tema.texto}`}>{t.resumenMetas}</h3>
              
              <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{t.totalPagadoMes} ({t.mesActual} {mesActual}):</span>
                  <span className="text-purple-700 font-bold text-xl">
                    ${totalesMetas.totalPagadoMesActual.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">{t.totalAcumuladoMetas}:</span>
                  <span className="text-indigo-700 font-bold text-xl">
                    ${totalesMetas.totalAcumuladoMetas.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>
          )}

          {metas.length === 0 && (
            <div className={`text-center py-8 ${tema.textoSecundario}`}>
              <p>{t.noMetas}</p>
              <p className="text-sm mt-2">{t.usaBoton} "{t.agregarMeta}" {t.paraAgregar}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}