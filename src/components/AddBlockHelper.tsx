// components/AddBlockHelper.tsx

'use client'

import type { ClientFieldProps } from 'payload'   // ← yeh sabse perfect hai

const AddBlockHelper = (props: ClientFieldProps) => {
  return (
    <div style={{ marginTop: '24px', textAlign: 'center', padding: '20px', background: '#f1f5f9', borderRadius: '12px', border: '2px dashed #94a3b8' }}>
      <p style={{ color: '#475569', marginBottom: '16px', fontSize: '15px' }}>
        Rich text ke baad yahan se naya block add kar sakte ho
      </p>
      <button
        onClick={() => alert('Dropdown/Modal khulega yahan')}
        style={{
          background: '#2563eb',
          color: 'white',
          border: 'none',
          padding: '12px 28px',
          borderRadius: '8px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(37,99,235,0.3)'
        }}
      >
        + Add New Block
      </button>
    </div>
  )
}

export default AddBlockHelper