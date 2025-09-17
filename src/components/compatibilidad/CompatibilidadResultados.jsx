// src/components/compatibilidad/CompatibilidadResultados.jsx
import React, { useMemo } from "react";
import usePerros from "@hooks/usePerros"; // usa tu hook; ajusta la ruta si es necesario

const DMAX = 8; // distancia máxima en 4D con escala 0-4

const calcularCompatibilidad = (perroVector, usuarioVector) => {
  const D = Math.sqrt(
    perroVector.reduce((s, p, i) => s + Math.pow(Number(p || 0) - Number(usuarioVector[i] || 0), 2), 0)
  );
  const compat = 100 * (1 - D / DMAX);
  // limitar entre 0 y 100, devolver con 2 decimales
  const clamped = Math.max(0, Math.min(100, compat));
  return Number(clamped.toFixed(2));
};

const CompatibilidadResultados = ({ usuarioVector }) => {
  const { data: perros, isLoading, error } = usePerros();

  const resultados = useMemo(() => {
    if (!usuarioVector || !Array.isArray(perros)) return [];
    return perros
      .map((p) => {
        const vector = [
          Number(p.energia ?? 0),
          Number(p.apego_vinculo ?? p.apego ?? 0),
          Number(p.regulacion_emocional ?? 0),
          Number(p.exploracion_libertad ?? p.exploracion ?? 0),
        ];
        return {
          id: p.id,
          nombre: p.nombre,
          compatibilidad: calcularCompatibilidad(vector, usuarioVector),
        };
      })
      .sort((a, b) => b.compatibilidad - a.compatibilidad);
  }, [perros, usuarioVector]);

  if (!usuarioVector) return null;
  if (isLoading) return <p>Cargando perros...</p>;
  if (error) return <p>Error cargando perros: {error}</p>;
  if (!resultados.length) return <p>No hay perros disponibles.</p>;

  return (
    <div>
      <h3>Mi compatibilidad</h3>
      <p>Tu vector: [{usuarioVector.join(", ")}]</p>
      <div>
        {resultados.map((r) => (
          <p key={r.id} style={{ margin: "6px 0" }}>
            <strong>{r.nombre}</strong> — {r.compatibilidad}% 
          </p>
        ))}
      </div>
    </div>
  );
};

export default CompatibilidadResultados;
